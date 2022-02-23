import { ICardButton } from 'types/infoCard';

const getColor = (color: string): string => {
  switch (color) {
    case 'red':
      return 'bg-red-500';
    case 'black':
      return 'bg-black';
    default:
      return 'bg-black';
  }
};

const Button = (props: ICardButton): JSX.Element => {
  const { children, color, productableId, productableType } = props;
  const colorStyle = getColor(color) as string;
  return (
    <button
      className={`flex h-7 w-24 items-center justify-center rounded-2xl text-white ${colorStyle}`}
      data-id={productableId}
      data-type={productableType}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
