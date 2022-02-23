import Image from 'next/image';
import { IAttributes } from 'types/infoCard';

const Card = (props: IAttributes): JSX.Element => {
  const { shopCoverImageUrl } = props;
  return (
    <div className="min-w-72 w-72 snap-center rounded-lg bg-white">
      <div className="h-72 w-72 overflow-hidden rounded-t-lg">
        <Image src={shopCoverImageUrl} alt="shopCoverImageUrl" width="288" height="140" />
      </div>
      <div>標頭</div>
      <div>TAGS</div>
      <div>Footer</div>
    </div>
  );
};

export default Card;
