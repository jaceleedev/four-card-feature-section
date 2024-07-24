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
    <div
      className="flex flex-col w-[311px] h-[222px] p-7 border-t-4 rounded-lg bg-white shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)]"
      style={{ borderTopColor: borderColorMap[borderColor] }}
    >
      <h3 className="card-title-text text-charcoal mb-[1px]">{title}</h3>
      <p className="card-body-text w-full">{description}</p>
      <div className="mt-auto ml-auto">
        <Image src={iconUrl} alt={`${title} icon`} width={57} height={57} />
      </div>
    </div>
  );
}

export default Card;
