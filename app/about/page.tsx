import { Container, Section, Card } from '@/components/ui';
import { Target, Eye, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <Section variant="default" spacing="lg" className="pt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-[var(--old-gold)]">ASC</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Asian Student Conference at Wichita State University is dedicated to 
              building community, celebrating culture, and fostering leadership among 
              Asian and Asian-American students.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section variant="accent" spacing="lg">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="p-8">
              <div className="w-14 h-14 bg-[var(--old-gold)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-[var(--old-gold)]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create an inclusive community that celebrates Asian cultures, 
                promotes cultural awareness, and empowers students to become leaders 
                who make a positive impact on campus and beyond.
              </p>
            </Card>

            <Card variant="elevated" className="p-8">
              <div className="w-14 h-14 bg-[var(--old-gold)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-[var(--old-gold)]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the premier organization for Asian students at WSU, fostering 
                a vibrant community that bridges cultures, develops leaders, and 
                creates lasting positive change in our university and community.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* History Section */}
      <Section variant="default" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our History
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Founded in 2024, the Asian Student Conference emerged from a vision 
                to create a welcoming space for Asian students at Wichita State University. 
                What started as a small group of passionate students has grown into a 
                thriving community.
              </p>
              <p>
                Over the years, ASC has become a cornerstone of cultural diversity on 
                campus, hosting numerous events, workshops, and initiatives that celebrate 
                Asian heritage while promoting cross-cultural understanding.
              </p>
              <p>
                Today, we continue to build upon our founders&apos; vision, creating 
                opportunities for leadership development, cultural celebration, and 
                community service that benefit not just our members, but the entire 
                WSU community.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section variant="accent" spacing="lg">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated" className="text-center p-8">
              <div className="w-16 h-16 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[var(--old-gold)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cultural Events
              </h3>
              <p className="text-gray-600">
                Host celebrations, festivals, and events that showcase the rich 
                diversity of Asian cultures and traditions.
              </p>
            </Card>

            <Card variant="elevated" className="text-center p-8">
              <div className="w-16 h-16 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[var(--old-gold)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Leadership Development
              </h3>
              <p className="text-gray-600">
                Provide workshops, mentorship programs, and opportunities for 
                members to develop valuable leadership skills.
              </p>
            </Card>

            <Card variant="elevated" className="text-center p-8">
              <div className="w-16 h-16 bg-[var(--old-gold)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[var(--old-gold)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community Service
              </h3>
              <p className="text-gray-600">
                Engage in volunteer work and service projects that give back to 
                the Wichita community and beyond.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
