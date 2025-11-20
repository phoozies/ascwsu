import { Container, Section, Button } from '@/components/ui';

export default function CTASection() {
  return (
    <Section variant="default" spacing="lg">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--old-gold)] to-[var(--old-gold-dark)] p-12 md:p-16 text-center text-white">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Join ASC?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Become part of a vibrant community dedicated to celebrating Asian culture 
              and building lasting friendships at Wichita State University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[var(--old-gold)] hover:bg-gray-100"
              >
                Apply for Membership
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[var(--old-gold)]"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
