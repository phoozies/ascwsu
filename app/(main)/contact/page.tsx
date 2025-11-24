import { Container, Section } from '@/components/ui';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <Section variant="accent" spacing="lg" className="pt-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact <span className="text-[var(--old-gold)]">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Coming Soon
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                This page is currently under construction. In the meantime, feel free to reach out to us through our social media channels!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.instagram.com/asc_wsu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[var(--old-gold)] text-white rounded-lg hover:bg-[var(--old-gold-dark)] transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
