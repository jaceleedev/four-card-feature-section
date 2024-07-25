import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  iconUrl: string;
  borderColor: 'red' | 'cyan' | 'orange' | 'blue';
}

function Card({
  title,
  description,
  iconUrl,
  borderColor,
}: Readonly<CardProps>) {
  const borderColorMap = {
    red: '#EA5454',
    cyan: '#44D3D2',
    orange: '#FCAE4A',
    blue: '#549EF2',
  };

  return (
    <article
      className="flex flex-col max-w-[311px] h-[222px] sm:max-w-[350px] sm:h-[250px] p-7 sm:p-8 border-t-4 rounded-lg bg-white shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)]"
      style={{ borderTopColor: borderColorMap[borderColor] }}
    >
      <header>
        <h3 className="card-title-text mb-[1px] sm:mb-[6px]">{title}</h3>
      </header>
      <p className="card-body-text">{description}</p>
      <div className="mt-auto ml-auto">
        <Image
          src={iconUrl}
          alt={`${title} icon`}
          width={57}
          height={57}
          className="w-[57px] h-[57px] sm:w-16 sm:h-16"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

export default Card;
