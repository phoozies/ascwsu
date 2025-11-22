import { Container, Section, Card } from '@/components/ui';
import { Trophy, Star, Medal, Gift, Ticket, ShoppingBag, Sparkles } from 'lucide-react';
import { getLeaderboardData } from '@/lib/googleSheets';
import LeaderboardItem from '@/components/LeaderboardItem';

// Revalidate every 5 minutes
export const revalidate = 300;

export default async function ClubScorePage() {
  const leaderboard = await getLeaderboardData();
  const topThree = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section with Top 3 Podium */}
      {topThree.length > 0 && (
        <Section variant="accent" spacing="lg" className="pt-16">
          <Container>
            {/* Club Score Header - Full Width Row */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Trophy className="w-12 h-12 text-[var(--old-gold)] mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  Club <span className="text-[var(--old-gold)]">Score</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Celebrate our member engagement and contributions to our community!
              </p>
            </div>

            {/* Two Column Layout: Instagram Embed (Left) + Top Performers (Right) */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Member of the Month Instagram Embed */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <Star className="w-8 h-8 text-[var(--old-gold)] mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Member of the Month</h2>
                  <Star className="w-8 h-8 text-[var(--old-gold)] ml-3" />
                </div>
                <div className="max-w-xl mx-auto">
                  <iframe
                    src="https://www.instagram.com/p/DQkLjdzCdoA/embed"
                    className="w-full border-0 overflow-hidden rounded-lg shadow-lg"
                    style={{
                      maxWidth: '540px',
                      minHeight: '680px',
                      margin: '0 auto',
                      display: 'block'
                    }}
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                  />
                </div>
              </div>

              {/* Right Column: Top Members Podium */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Top Members
                </h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  {/* 2nd Place */}
                  {topThree[1] && (
                    <div className="order-2 md:order-1">
                      <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform md:translate-y-8">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Medal className="w-8 h-8 text-gray-600" />
                        </div>
                        <div className="text-3xl font-bold text-gray-400 mb-2">2nd</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{topThree[1].name}</h3>
                        <div className="text-2xl font-bold text-[var(--old-gold)]">
                          {topThree[1].points} pts
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 1st Place */}
                  {topThree[0] && (
                    <div className="order-1 md:order-2">
                      <div className="bg-gradient-to-br from-[var(--old-gold)] to-yellow-600 rounded-2xl shadow-2xl p-6 text-center transform scale-105">
                        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Trophy className="w-10 h-10 text-[var(--old-gold)]" />
                        </div>
                        <div className="text-4xl font-bold text-white mb-2">1st</div>
                        <h3 className="text-xl font-bold text-white mb-2">{topThree[0].name}</h3>
                        <div className="text-3xl font-bold text-white">
                          {topThree[0].points} pts
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3rd Place */}
                  {topThree[2] && (
                    <div className="order-3">
                      <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform md:translate-y-12">
                        <div className="w-16 h-16 bg-amber-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Medal className="w-8 h-8 text-amber-100" />
                        </div>
                        <div className="text-3xl font-bold text-amber-700 mb-2">3rd</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{topThree[2].name}</h3>
                        <div className="text-2xl font-bold text-[var(--old-gold)]">
                          {topThree[2].points} pts
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Full Leaderboard */}
      {rest.length > 0 && (
        <Section variant="default" spacing="lg">
          <Container>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Full Rankings
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 mb-16">
              {rest.map((member) => (
                <LeaderboardItem
                  key={member.rank}
                  rank={member.rank ?? 0}
                  name={member.name}
                  points={member.points}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {leaderboard.length === 0 && (
        <Section variant="accent" spacing="lg">
          <Container>
            <div className="text-center text-gray-500 py-12">
              <Star className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">No leaderboard data available yet</p>
            </div>
          </Container>
        </Section>
      )}

      {/* Membership Perks */}
      <Section variant="accent" spacing="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Standard <span className="text-[var(--old-gold)]">Membership Perks</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Points only accumulate for paid ASC members!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card variant="elevated" className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[var(--old-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">1 Point Per Event</h3>
                    <p className="text-gray-600">Earn one ASCore point for every event you attend</p>
                  </div>
                </div>
              </Card>

              <Card variant="elevated" className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-[var(--old-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">MAASU Conference Priority</h3>
                    <p className="text-gray-600">Top point earners get priority and accommodations for all MAASU Conferences</p>
                  </div>
                </div>
              </Card>

              <Card variant="elevated" className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-[var(--old-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Member of the Month</h3>
                    <p className="text-gray-600">Win a gift basket of ASC items and more!</p>
                  </div>
                </div>
              </Card>

              <Card variant="elevated" className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Ticket className="w-6 h-6 text-[var(--old-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Event Discounts</h3>
                    <p className="text-gray-600">Discounted tickets for Assembly and End of Year Banquet</p>
                  </div>
                </div>
              </Card>

              <Card variant="elevated" className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-6 h-6 text-[var(--old-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Discounted Merch</h3>
                    <p className="text-gray-600">Get exclusive discounts on all ASC merchandise</p>
                  </div>
                </div>
              </Card>

              <Card variant="elevated" className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-[var(--old-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Trade Points for Rewards</h3>
                    <p className="text-gray-600">Redeem your points for merch and other exclusive items</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
