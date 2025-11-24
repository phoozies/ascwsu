'use client';

import { Suspense } from 'react';
import { Container, Section, Card } from '@/components/ui';
import { Trophy, Star, Medal, Gift, Ticket, ShoppingBag, Sparkles } from 'lucide-react';
import LeaderboardItem from '@/components/LeaderboardItem';
import PodiumSkeleton from '@/components/PodiumSkeleton';
import LeaderboardSkeleton from '@/components/LeaderboardSkeleton';
import EmptyState from '@/components/EmptyState';

interface MemberScore {
  name: string;
  points: number;
  rank?: number;
}

interface LeaderboardContentProps {
  leaderboard: MemberScore[];
}

function LeaderboardContent({ leaderboard }: LeaderboardContentProps) {
  const topThree = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  if (leaderboard.length === 0) {
    return (
      <Section variant="accent" spacing="lg" className="pt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Club <span className="text-[var(--old-gold)]">Score</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Celebrate our member engagement and contributions to our community!
            </p>
          </div>
          <EmptyState
            icon="users"
            title="No Rankings Yet"
            description="Check back soon! The leaderboard will be updated as members start earning points through event participation."
            action={{
              label: 'View Upcoming Events',
              href: '/events'
            }}
          />
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* Header Section */}
      <Section variant="accent" spacing="lg" className="pt-16">
        <Container>
          {/* Club Score Header - Full Width Row */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Club <span className="text-[var(--old-gold)]">Score</span>
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Celebrate our member engagement and contributions to our community!
            </p>
          </div>

          {/* Member of the Month Instagram Embed */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--old-gold)] mr-2 sm:mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Member of the Month</h2>
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--old-gold)] ml-2 sm:ml-3" />
            </div>
            <div className="max-w-xl mx-auto relative">
              {/* Loading overlay for Instagram */}
              <div className="absolute inset-0 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-gray-400 animate-pulse" />
              </div>
              <iframe
                src="https://www.instagram.com/p/DQkLjdzCdoA/embed"
                className="w-full border-0 overflow-hidden rounded-lg shadow-lg relative z-10"
                style={{
                  maxWidth: '540px',
                  minHeight: '680px',
                  margin: '0 auto',
                  display: 'block'
                }}
                frameBorder="0"
                scrolling="no"
                allowTransparency
                onLoad={(e) => {
                  const parent = e.currentTarget.previousElementSibling;
                  if (parent) parent.remove();
                }}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Full Leaderboard */}
      <Section variant="default" spacing="lg">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Full Rankings
          </h2>
          <div className="max-w-7xl mx-auto">
            {/* Top 3 Podium */}
            {topThree.length > 0 && (
              <div className="mb-16">
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
            )}

            {/* Three Column Layout for Rest */}
            {rest.length > 0 && (
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {(() => {
                  // Calculate items per column ensuring middle is longest
                  const totalItems = rest.length;
                  const baseItemsPerColumn = Math.floor(totalItems / 3);
                  const remainder = totalItems % 3;
                  
                  // Distribute items: middle gets extra first, then balance left/right
                  let leftCount, middleCount, rightCount;
                  
                  if (remainder === 0) {
                    // Even distribution (e.g., 9: 3-3-3)
                    leftCount = middleCount = rightCount = baseItemsPerColumn;
                  } else if (remainder === 1) {
                    // Middle gets the extra item (e.g., 10: 3-4-3)
                    leftCount = rightCount = baseItemsPerColumn;
                    middleCount = baseItemsPerColumn + 1;
                  } else {
                    // remainder === 2: Balance left/right equally (e.g., 11: 3-5-3 or 8: 2-4-2)
                    leftCount = rightCount = baseItemsPerColumn;
                    middleCount = baseItemsPerColumn + 2;
                  }
                  
                  const leftColumn = rest.slice(0, leftCount);
                  const middleColumn = rest.slice(leftCount, leftCount + middleCount);
                  const rightColumn = rest.slice(leftCount + middleCount);

                  return (
                    <>
                      {/* Left Column */}
                      <div className="space-y-6">
                        {leftColumn.map((member) => (
                          <LeaderboardItem
                            key={member.rank}
                            rank={member.rank ?? 0}
                            name={member.name}
                            points={member.points}
                          />
                        ))}
                      </div>

                      {/* Middle Column - Most Prominent */}
                      <div className="space-y-6">
                        {middleColumn.map((member) => (
                          <LeaderboardItem
                            key={member.rank}
                            rank={member.rank ?? 0}
                            name={member.name}
                            points={member.points}
                            variant="prominent"
                          />
                        ))}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {rightColumn.map((member) => (
                          <LeaderboardItem
                            key={member.rank}
                            rank={member.rank ?? 0}
                            name={member.name}
                            points={member.points}
                          />
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default function ClubScoreClientWrapper({ leaderboard }: { leaderboard: MemberScore[] }) {
  return (
    <div className="min-h-screen pt-20">
      <Suspense fallback={
        <>
          <Section variant="accent" spacing="lg" className="pt-16">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                    Club <span className="text-[var(--old-gold)]">Score</span>
                  </h1>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Celebrate our member engagement and contributions to our community!
                </p>
              </div>
            </Container>
          </Section>
          <Section variant="default" spacing="lg">
            <Container>
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Loading Rankings...
              </h2>
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <PodiumSkeleton />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <LeaderboardSkeleton />
                  <LeaderboardSkeleton />
                  <LeaderboardSkeleton />
                </div>
              </div>
            </Container>
          </Section>
        </>
      }>
        <LeaderboardContent leaderboard={leaderboard} />
      </Suspense>

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
