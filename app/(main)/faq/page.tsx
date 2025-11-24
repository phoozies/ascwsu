import { Container, Section, Card } from '@/components/ui';

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I get involved?",
      answer: "Getting involved with ASC is easy! Attend our events throughout the semester, follow us on social media for updates, and consider becoming a paid member to unlock additional benefits. Check out our events calendar and join us at our next gathering!",
    },
    {
      question: "How do I become a Paid Member?",
      answer: "To become a paid member, fill out our membership form and pay the membership fee. As a paid member, you'll earn ASCore points for attending events, get priority for MAASU Conference, receive discounts on events and merchandise, and be eligible for Member of the Month recognition!",
    },
    {
      question: "I have gone to multiple ASC events but my ASCore is not there",
      answer: "If you've attended events but don't see your ASCore points, make sure you're a paid member first - points only accumulate for paid members. If you are a paid member and still don't see your points, please reach out to our board members or send us a message through our contact form. We update the leaderboard regularly, so there may be a short delay.",
    },
    {
      question: "What is Big/Little?",
      answer: "Big/Little is our mentorship program where experienced members (Bigs) are paired with newer members (Littles) to help them navigate ASC, make connections, and feel more involved in the community. It's a great way to build lasting friendships and get the most out of your ASC experience!",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Section variant="accent" spacing="lg" className="pt-16">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              FAQ <span className="text-[var(--old-gold)]">&amp; Help</span>
            </h1>
          </div>

          {/* FAQ Cards */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} variant="elevated" className="p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Still Have Questions Card */}
          <div className="max-w-4xl mx-auto my-12 sm:my-16 md:my-24">
            <Card variant="elevated" className="p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Still have questions?
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Feel free to reach out to our board members or contact us through our social media channels. We&apos;re here to help!
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
