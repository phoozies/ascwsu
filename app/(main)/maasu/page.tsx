import { Container, Section } from '@/components/ui';

export default function MAAUSPage() {
  return (
    <div className="min-h-screen">
      <Section variant="accent" spacing="lg" className="pt-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              MAASU <span className="text-[var(--old-gold)]">Conference</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Coming Soon
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                This page is currently under construction. Check back soon for more information about the MAASU Conference and how to attend!
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
