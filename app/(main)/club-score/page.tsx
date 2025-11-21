import { Container, Section, Card } from '@/components/ui';
import { Trophy, TrendingUp, Star, Medal } from 'lucide-react';

// Placeholder data - replace with real data later
const leaderboard = [
  {
    rank: 1,
    name: 'Emily Chen',
    points: 450,
    avatar: '/asc_logo_white_border.png',
    badges: ['Event Organizer', 'Top Volunteer', 'Mentor'],
  },
  {
    rank: 2,
    name: 'David Kim',
    points: 420,
    avatar: '/asc_logo_white_border.png',
    badges: ['Leadership', 'Cultural Ambassador'],
  },
  {
    rank: 3,
    name: 'Sarah Patel',
    points: 385,
    avatar: '/asc_logo_white_border.png',
    badges: ['Event Champion', 'Community Builder'],
  },
  {
    rank: 4,
    name: 'Michael Nguyen',
    points: 360,
    avatar: '/asc_logo_white_border.png',
    badges: ['Top Volunteer', 'Team Player'],
  },
  {
    rank: 5,
    name: 'Jessica Lee',
    points: 340,
    avatar: '/asc_logo_white_border.png',
    badges: ['Rising Star', 'Mentor'],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: 'Event Champion',
    description: 'Attend 10+ events in a semester',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    icon: Star,
    title: 'Cultural Ambassador',
    description: 'Lead a cultural presentation or workshop',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Medal,
    title: 'Top Volunteer',
    description: 'Complete 20+ volunteer hours',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Leadership Award',
    description: 'Serve in an executive board position',
    color: 'from-red-400 to-red-600',
  },
];

const pointsBreakdown = [
  { activity: 'Event Attendance', points: 10 },
  { activity: 'Event Organization', points: 50 },
  { activity: 'Volunteer Hours (per hour)', points: 5 },
  { activity: 'Workshop Presentation', points: 30 },
  { activity: 'Committee Participation', points: 20 },
  { activity: 'Recruiting New Members', points: 15 },
];

export default function ClubScorePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <Section variant="default" spacing="lg" className="pt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="w-12 h-12 text-[var(--old-gold)] mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Club <span className="text-[var(--old-gold)]">Score</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Celebrating member engagement and contributions to our community
            </p>
          </div>
        </Container>
      </Section>

      {/* Leaderboard */}
      <Section variant="accent" spacing="lg">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Current Leaderboard
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {leaderboard.map((member) => (
              <Card
                key={member.rank}
                variant="elevated"
                className={`p-6 ${
                  member.rank === 1
                    ? 'border-2 border-[var(--old-gold)] shadow-xl'
                    : ''
                }`}
              >
                <div className="flex items-center gap-6">
                  {/* Rank */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl ${
                      member.rank === 1
                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
                        : member.rank === 2
                        ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white'
                        : member.rank === 3
                        ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {member.rank}
                  </div>

                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--old-gold)] to-[var(--old-gold-dark)]" />

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.badges.map((badge, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[var(--old-gold)] bg-opacity-10 text-[var(--old-gold)] text-xs font-semibold rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Points */}
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[var(--old-gold)]">
                      {member.points}
                    </div>
                    <div className="text-sm text-gray-600">points</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Achievements */}
      <Section variant="default" spacing="lg">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Available Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.title}
                  variant="elevated"
                  className="text-center p-8 hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Points System */}
      <Section variant="accent" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              How Points Work
            </h2>
            <Card variant="elevated" className="p-8">
              <p className="text-lg text-gray-600 mb-6 text-center">
                Earn points by actively participating in ASC activities and 
                contributing to our community. Points unlock achievements and 
                recognition!
              </p>
              <div className="space-y-4">
                {pointsBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.activity}
                    </span>
                    <span className="text-[var(--old-gold)] font-bold text-lg">
                      +{item.points} pts
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Motivation Section */}
      <Section variant="default" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Earning Points Today!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every contribution matters. Whether you&apos;re attending events, 
              volunteering, or taking on leadership roles, your participation 
              makes ASC stronger. Track your progress and celebrate your achievements!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="bordered" className="p-6">
                <div className="text-4xl font-bold text-[var(--old-gold)] mb-2">
                  50+
                </div>
                <div className="text-gray-600">Active Members</div>
              </Card>
              <Card variant="bordered" className="p-6">
                <div className="text-4xl font-bold text-[var(--old-gold)] mb-2">
                  2,500+
                </div>
                <div className="text-gray-600">Points Earned This Year</div>
              </Card>
              <Card variant="bordered" className="p-6">
                <div className="text-4xl font-bold text-[var(--old-gold)] mb-2">
                  15+
                </div>
                <div className="text-gray-600">Unique Achievements</div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
