export interface MemberScore {
  name: string;
  points: number;
  rank?: number;
}

export async function getLeaderboardData(): Promise<MemberScore[]> {
  try {
    const spreadsheetId = '1fSUaayqAdqRb9Ja1uvxBRBOE3HxDHVwPYw1f0qyVdWU';
    
    // Using Google Sheets public API to fetch data from the first sheet
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&gid=0`;
    
    const response = await fetch(url, {
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch sheet data');
    }
    
    const text = await response.text();
    // Remove the callback wrapper to get JSON
    const json = JSON.parse(text.substring(47).slice(0, -2));
    
    const rows = json.table.rows;
    
    if (!rows || rows.length === 0) {
      return [];
    }

    // Map rows to member scores
    // Note: Google Sheets API doesn't provide cell color info via the public API
    // We'll filter based on non-empty cells with valid data
    const members: MemberScore[] = rows
      .filter((row: { c: Array<{ v?: string | number } | null> }) => {
        // Check if both name (column A) and points (column B) exist and are valid
        const hasName = row.c[0]?.v && typeof row.c[0].v === 'string' && row.c[0].v.trim() !== '';
        const hasPoints = row.c[1]?.v !== null && row.c[1]?.v !== undefined && row.c[1].v !== '';
        return hasName && hasPoints;
      })
      .map((row: { c: Array<{ v?: string | number } | null> }) => ({
        name: String(row.c[0]?.v || '').trim(), // Column A - Name
        points: parseInt(String(row.c[1]?.v || '0')) || 0, // Column B - Points
      }))
      .filter((member: { name: string; points: number }) => member.points > 0) // Only include members with points > 0
      .sort((a: { points: number }, b: { points: number }) => b.points - a.points)
      .map((member: { name: string; points: number }, index: number) => ({
        ...member,
        rank: index + 1,
      }));

    return members;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return [];
  }
}
