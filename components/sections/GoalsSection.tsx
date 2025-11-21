import { Container, Section } from '@/components/ui';

const goals = [
  {
    number: '01',
    title: 'Unite Asian-Americans',
    description: 'To unite college Asian-Americans and/or students of Asian culture interests.',
  },
  {
    number: '02',
    title: 'Develop Leadership',
    description: 'To develop leadership skills among our members.',
  },
  {
    number: '03',
    title: 'Celebrate Heritage',
    description: 'To educate and participate in the education and celebration of the Asian heritage.',
  },
];

export default function GoalsSection() {
  return (
    <Section variant="default" spacing="lg">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-[var(--old-gold)]">Goals</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ASC strives to foster college students participation with respect to the following goals
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {goals.map((goal) => {
            return (
              <div
                key={goal.number}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--old-gold)]"
              >
                <div className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--old-gold)] to-[var(--old-gold-dark)] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {goal.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {goal.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--old-gold)]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
