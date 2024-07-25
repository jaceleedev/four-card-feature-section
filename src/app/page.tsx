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
    <main className="flex flex-col justify-center items-center w-screen min-h-screen px-8 pt-[85px] pb-[78px] bg-offWhite md:p-0">
      <section className="flex flex-col justify-center items-center gap-4 mb-[76px] max-w-[540px] lg:mb-16">
        <header>
          <h1 className="title-text-light text-center mb-[1px]">
            Reliable, efficient delivery
          </h1>
          <h2 className="title-text-bold text-center">Powered by Technology</h2>
        </header>
        <p className="body-text text-center">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </section>
      <section
        className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-4 lg:gap-[30px]"
        aria-label="Feature cards"
      >
        {cardData.map((card, index) => (
          <div
            key={card.title}
            className={`
        ${
          index === 0
            ? 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4'
            : ''
        }
        ${
          index === 1
            ? 'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3'
            : ''
        }
        ${
          index === 2
            ? 'md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-5'
            : ''
        }
        ${
          index === 3
            ? 'md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4'
            : ''
        }
      `}
          >
            <Card {...card} />
          </div>
        ))}
      </section>
    </main>
  );
}
