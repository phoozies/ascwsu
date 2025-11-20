import { Container, Section, Card, Button } from '@/components/ui';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

// Placeholder data - replace with real data later
const upcomingEvents = [
  {
    id: 1,
    title: 'Lunar New Year Celebration',
    date: 'February 10, 2026',
    time: '6:00 PM - 9:00 PM',
    location: 'RSC Ballroom',
    description: 'Join us for an evening of cultural performances, traditional food, and celebration as we welcome the Year of the Snake.',
    attendees: 120,
    image: '/asc_logo_white_border.png',
    category: 'Cultural',
  },
  {
    id: 2,
    title: 'Leadership Workshop Series',
    date: 'January 25, 2026',
    time: '4:00 PM - 6:00 PM',
    location: 'Lindquist Hall Room 204',
    description: 'Develop essential leadership skills through interactive workshops led by industry professionals and alumni.',
    attendees: 45,
    image: '/asc_logo_white_border.png',
    category: 'Professional Development',
  },
  {
    id: 3,
    title: 'Community Service Day',
    date: 'February 15, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'Local Community Center',
    description: 'Give back to the Wichita community through various volunteer activities and service projects.',
    attendees: 60,
    image: '/asc_logo_white_border.png',
    category: 'Service',
  },
];

const pastEvents = [
  {
    id: 4,
    title: 'Fall Cultural Night',
    date: 'November 15, 2025',
    location: 'WSU Student Center',
    attendees: 200,
    highlights: 'Featured performances from 8 different Asian cultures, traditional food tasting, and cultural exhibits.',
  },
  {
    id: 5,
    title: 'Mid-Autumn Festival',
    date: 'September 20, 2025',
    location: 'Campus Green',
    attendees: 150,
    highlights: 'Mooncake making workshop, lantern lighting ceremony, and traditional games.',
  },
  {
    id: 6,
    title: 'Back to School Social',
    date: 'August 28, 2025',
    location: 'Shocker Hall',
    attendees: 80,
    highlights: 'Welcome event for new and returning members with icebreakers and team-building activities.',
  },
];

const eventCategories = [
  { name: 'All Events', count: 12 },
  { name: 'Cultural', count: 5 },
  { name: 'Professional Development', count: 3 },
  { name: 'Service', count: 2 },
  { name: 'Social', count: 2 },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <Section variant="default" spacing="lg" className="pt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[var(--old-gold)]">Events</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From cultural celebrations to professional development workshops, 
              discover the vibrant events that bring our community together.
            </p>
          </div>
        </Container>
      </Section>

      {/* Event Categories */}
      <Section variant="accent" spacing="md">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {eventCategories.map((category) => (
              <button
                key={category.name}
                className="px-6 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-[var(--old-gold)] hover:bg-[var(--old-gold)] hover:text-white transition-all font-medium"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Upcoming Events */}
      <Section variant="default" spacing="lg">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Upcoming Events
          </h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event) => (
              <Card key={event.id} variant="elevated" className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="aspect-square md:aspect-auto relative bg-gradient-to-br from-[var(--old-gold)] to-[var(--old-gold-dark)]" />
                  <div className="md:col-span-2 p-8">
                    <div className="inline-block px-3 py-1 bg-[var(--old-gold)] bg-opacity-10 rounded-full text-sm font-semibold text-[var(--old-gold)] mb-3">
                      {event.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2 text-[var(--old-gold)]" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-2 text-[var(--old-gold)]" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-2 text-[var(--old-gold)]" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2 text-[var(--old-gold)]" />
                        <span className="text-sm">{event.attendees} attending</span>
                      </div>
                    </div>

                    <Button>Register Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Past Events */}
      <Section variant="accent" spacing="lg">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Past Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} variant="bordered" className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[var(--old-gold)]" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[var(--old-gold)]" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-[var(--old-gold)]" />
                    {event.attendees} attended
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{event.highlights}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Event Newsletter Signup */}
      <Section variant="default" spacing="lg">
        <Container>
          <Card variant="elevated" className="max-w-2xl mx-auto p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss an Event
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Subscribe to our event newsletter and get updates on all upcoming 
              activities, workshops, and celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--old-gold)] focus:border-transparent"
              />
              <Button className="sm:w-auto">Subscribe</Button>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
