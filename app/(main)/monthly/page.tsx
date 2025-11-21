import { Container, Section, Card } from '@/components/ui';
import { Star, Calendar as CalendarIcon, Award } from 'lucide-react';

// Placeholder data - replace with real data later
const memberOfTheMonth = {
  name: 'Jessica Wang',
  role: 'Senior Member',
  achievements: [
    'Led cultural heritage event planning',
    'Mentored 5 new members',
    'Organized community service initiative',
  ],
  quote: 'Being recognized as Member of the Month is an honor. ASC has given me so many opportunities to grow and give back.',
  image: '/asc_logo_white_border.png',
};

const upcomingEvents = [
  {
    date: '15',
    month: 'DEC',
    title: 'Cultural Night Celebration',
    time: '6:00 PM - 9:00 PM',
    location: 'WSU Student Center',
  },
  {
    date: '22',
    month: 'DEC',
    title: 'Year-End Social Gathering',
    time: '5:00 PM - 8:00 PM',
    location: 'Campus Commons',
  },
  {
    date: '10',
    month: 'JAN',
    title: 'Spring Semester Kickoff',
    time: '7:00 PM - 9:00 PM',
    location: 'RSC Ballroom',
  },
  {
    date: '18',
    month: 'JAN',
    title: 'Leadership Workshop',
    time: '4:00 PM - 6:00 PM',
    location: 'Lindquist Hall',
  },
];

export default function MonthlyPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Member of the Month */}
      <Section variant="accent" spacing="lg">
        <Container>
          <div className="flex items-center justify-center mb-8">
            <Star className="w-8 h-8 text-[var(--old-gold)] mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Member of the Month</h2>
            <Star className="w-8 h-8 text-[var(--old-gold)] ml-3" />
          </div>

          <Card variant="elevated" className="max-w-4xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-square relative bg-gradient-to-br from-[var(--old-gold)] to-[var(--old-gold-dark)]" />
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {memberOfTheMonth.name}
                  </h3>
                  <p className="text-[var(--old-gold)] font-medium text-lg">
                    {memberOfTheMonth.role}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[var(--old-gold)]" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {memberOfTheMonth.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="text-[var(--old-gold)] mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-700 italic border-l-4 border-[var(--old-gold)] pl-4">
                  &ldquo;{memberOfTheMonth.quote}&rdquo;
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

            {/* Monthly Calendar */}
      <Section variant="default" spacing="lg">
        <Container>
          <div className="flex items-center justify-center mb-12">
            <CalendarIcon className="w-8 h-8 text-[var(--old-gold)] mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                variant="bordered"
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[var(--old-gold)] bg-opacity-10 rounded-lg flex flex-col items-center justify-center">
                      <div className="text-3xl font-bold text-[var(--old-gold)]">
                        {event.date}
                      </div>
                      <div className="text-sm font-semibold text-[var(--old-gold-dark)]">
                        {event.month}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-medium">Time:</span> {event.time}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Location:</span> {event.location}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
