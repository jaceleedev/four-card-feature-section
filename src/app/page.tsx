import Card from '@/components/Card';

const cardData = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    iconUrl: '/images/icon-supervisor.svg',
    borderColor: 'cyan' as const,
  },
  {
    title: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    iconUrl: '/images/icon-team-builder.svg',
    borderColor: 'red' as const,
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    iconUrl: '/images/icon-karma.svg',
    borderColor: 'orange' as const,
  },
  {
    title: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    iconUrl: '/images/icon-calculator.svg',
    borderColor: 'blue' as const,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen min-h-screen px-8 pt-[85px] pb-[78px] bg-offWhite">
      <div className="flex flex-col justify-center items-center gap-4 mb-[76px]">
        <div>
          <h1 className="title-text-light text-charcoal text-center mb-[1px]">
            Reliable, efficient delivery
          </h1>
          <h2 className="title-text-bold text-charcoal text-center">
            Powered by Technology
          </h2>
        </div>
        <p className="body-text text-center">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="flex flex-col gap-[25px]">
        {cardData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            iconUrl={card.iconUrl}
            borderColor={card.borderColor}
          />
        ))}
      </div>
    </main>
  );
}
