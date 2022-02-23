import { IAttributes } from 'types/infoCard';

const Card = (props: IAttributes): JSX.Element => {
  return <div>{JSON.stringify(props).replaceAll(',', ', ')}</div>;
};

export default Card;
