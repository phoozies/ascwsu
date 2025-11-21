import { Container, Section } from '@/components/ui';
import EventCarousel from '@/components/EventCarousel';
import { annualEvents } from '@/lib/eventsData';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <Section variant="default" spacing="lg" className="pt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-[var(--old-gold)]">Asian Student Conference</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              ASC is a WSU Multi-Cultural Agency that aims to unite Asian Americans or students with Asian interest within campus by providing college students with network, socials, leadership events encouraging/educating about Asian culture and heritage throughout campus!
            </p>
          </div>
        </Container>
      </Section>

      {/* Annual Events Section */}
      <Section variant="accent" spacing="lg" fullHeight>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Annual <span className="text-[var(--old-gold)]">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Throughout the year, ASC hosts exciting events that celebrate Asian culture, 
              build community, and create lasting memories for all our members.
            </p>
          </div>
          <EventCarousel events={annualEvents} />
        </Container>
      </Section>
    </div>
  );
}
