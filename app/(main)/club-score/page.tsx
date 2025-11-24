import { getLeaderboardData } from '@/lib/googleSheets';
import ClubScoreClient from '@/components/ClubScoreClient';

// Revalidate every 5 minutes
export const revalidate = 300;

export default async function ClubScorePage() {
  const leaderboard = await getLeaderboardData();

  return <ClubScoreClient leaderboard={leaderboard} />;
}
