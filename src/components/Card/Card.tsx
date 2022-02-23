import { ICard } from 'types/infoCard';

const Card = (props: ICard): JSX.Element => {
  return <div>{JSON.stringify(props).replace(/,/g, ', ')}</div>;
};

export default Card;
