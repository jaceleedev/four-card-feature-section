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
    <main className="flex flex-col justify-center items-center w-screen min-h-screen px-8 pt-[85px] pb-[78px] bg-offWhite lg:p-0">
      <div className="flex flex-col justify-center items-center gap-4 mb-[76px] max-w-[540px] lg:mb-16">
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
      <div className="flex flex-col gap-[25px] lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:gap-[30px] lg:max-w-[1110px]">
        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4">
          <Card {...cardData[0]} />
        </div>
        <div className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
          <Card {...cardData[1]} />
        </div>
        <div className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-5">
          <Card {...cardData[2]} />
        </div>
        <div className="lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4">
          <Card {...cardData[3]} />
        </div>
      </div>
    </main>
  );
}
