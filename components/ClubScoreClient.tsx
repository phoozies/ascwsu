'use client';

import { Suspense } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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
      <Section variant="accent" spacing="lg">
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
      <Section variant="accent" spacing="lg">
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
            <div className="flex justify-center">
              <div className="relative" style={{ width: '100%', maxWidth: '540px' }}>
                {/* Loading overlay for Instagram */}
                <div className="absolute inset-0 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center" style={{ minHeight: '680px' }}>
                  <Sparkles className="w-12 h-12 text-gray-400 animate-pulse" />
                </div>
                <iframe
                  src="https://www.instagram.com/p/DQkLjdzCdoA/embed"
                  className="w-full border-0 rounded-lg shadow-lg relative z-10"
                  style={{
                    width: '100%',
                    minHeight: '680px',
                    height: '680px',
                    display: 'block'
                  }}
                  frameBorder="0"
                  scrolling="no"
                  onLoad={(e) => {
                    const parent = e.currentTarget.previousElementSibling;
                    if (parent) parent.remove();
                  }}
                />
              </div>
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
              <Box sx={{ mb: 8 }}>
                <Grid container spacing={3} sx={{ maxWidth: '48rem', mx: 'auto' }}>
                  {/* 2nd Place */}
                  {topThree[1] && (
                    <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 2, md: 1 } }}>
                      <Box
                        sx={{
                          bgcolor: 'white',
                          borderRadius: 4,
                          boxShadow: 3,
                          p: 3,
                          textAlign: 'center',
                          transform: { md: 'translateY(2rem)' },
                        }}
                      >
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            bgcolor: 'grey.300',
                            borderRadius: '50%',
                            mx: 'auto',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Medal className="w-8 h-8 text-gray-600" />
                        </Box>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: 'grey.400', mb: 1 }}>
                          2nd
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'grey.900', mb: 1 }}>
                          {topThree[1].name}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {topThree[1].points} pts
                        </Typography>
                      </Box>
                    </Grid>
                  )}

                  {/* 1st Place */}
                  {topThree[0] && (
                    <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 1, md: 2 } }}>
                      <Box
                        sx={{
                          background: 'linear-gradient(135deg, var(--old-gold) 0%, #fbbf24 100%)',
                          borderRadius: 4,
                          boxShadow: 6,
                          p: 3,
                          textAlign: 'center',
                          transform: 'scale(1.05)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            bgcolor: 'white',
                            borderRadius: '50%',
                            mx: 'auto',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Trophy className="w-10 h-10 text-[var(--old-gold)]" />
                        </Box>
                        <Typography variant="h2" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                          1st
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                          {topThree[0].name}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: 'white' }}>
                          {topThree[0].points} pts
                        </Typography>
                      </Box>
                    </Grid>
                  )}

                  {/* 3rd Place */}
                  {topThree[2] && (
                    <Grid size={{ xs: 12, md: 4 }} sx={{ order: 3 }}>
                      <Box
                        sx={{
                          bgcolor: 'white',
                          borderRadius: 4,
                          boxShadow: 3,
                          p: 3,
                          textAlign: 'center',
                          transform: { md: 'translateY(3rem)' },
                        }}
                      >
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            bgcolor: 'rgb(180, 83, 9)',
                            borderRadius: '50%',
                            mx: 'auto',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Medal className="w-8 h-8 text-amber-100" />
                        </Box>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: 'rgb(180, 83, 9)', mb: 1 }}>
                          3rd
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'grey.900', mb: 1 }}>
                          {topThree[2].name}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {topThree[2].points} pts
                        </Typography>
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </Box>
            )}

            {/* Three Column Layout for Rest */}
            {rest.length > 0 && (
              <Grid container spacing={3} sx={{ mb: 8 }}>
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
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                          {leftColumn.map((member) => (
                            <LeaderboardItem
                              key={member.rank}
                              rank={member.rank ?? 0}
                              name={member.name}
                              points={member.points}
                            />
                          ))}
                        </Box>
                      </Grid>

                      {/* Middle Column - Most Prominent */}
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                          {middleColumn.map((member) => (
                            <LeaderboardItem
                              key={member.rank}
                              rank={member.rank ?? 0}
                              name={member.name}
                              points={member.points}
                              variant="prominent"
                            />
                          ))}
                        </Box>
                      </Grid>

                      {/* Right Column */}
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                          {rightColumn.map((member) => (
                            <LeaderboardItem
                              key={member.rank}
                              rank={member.rank ?? 0}
                              name={member.name}
                              points={member.points}
                            />
                          ))}
                        </Box>
                      </Grid>
                    </>
                  );
                })()}
              </Grid>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default function ClubScoreClientWrapper({ leaderboard }: { leaderboard: MemberScore[] }) {
  return (
    <div className="min-h-screen">
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
