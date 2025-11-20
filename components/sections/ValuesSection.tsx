import { Users, Calendar, Award, Heart } from 'lucide-react';
import { Container, Section, Card } from '@/components/ui';

const values = [
  {
    icon: Users,
    title: 'Community',
    description: 'Building lasting connections and fostering a sense of belonging among Asian students at WSU.',
  },
  {
    icon: Calendar,
    title: 'Cultural Celebration',
    description: 'Honoring and sharing the rich diversity of Asian cultures through events and activities.',
  },
  {
    icon: Award,
    title: 'Leadership',
    description: 'Empowering members to develop leadership skills and make a positive impact on campus.',
  },
  {
    icon: Heart,
    title: 'Service',
    description: 'Giving back to our community through volunteer work and meaningful initiatives.',
  },
];

export default function ValuesSection() {
  return (
    <Section variant="accent" spacing="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide our mission and unite our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card
                key={value.title}
                variant="elevated"
                className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[var(--old-gold)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
