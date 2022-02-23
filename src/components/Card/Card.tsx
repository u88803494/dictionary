import Image from 'next/image';

import { IAttributes } from 'types/infoCard';
import { ArrowLeft } from '../svg';
import Button from './Button';

const Card = (props: IAttributes): JSX.Element => {
  const {
    averageRating,
    currency,
    listPrice,
    name,
    productableId,
    productableType,
    salePrice,
    shopCoverImageUrl,
    slogan,
    studentsCount,
    ratingCount,
    tags,
  } = props;
  const currencySymbol = currency === 'USD' ? '$' : 'NT$';

  return (
    <div className="min-w-72 w-72 snap-center rounded-lg bg-white">
      <div className="h-fit w-72 overflow-hidden rounded-t-lg">
        <Image src={shopCoverImageUrl} alt="shopCoverImageUrl" width="288" height="140" />
      </div>
      <div className="flex h-80 flex-col justify-between px-5 pt-4 pb-5">
        <div className="space-y-2">
          <div className="text-xs text-gray-600">{studentsCount}人一起學習</div>
          <div className="text-lg">{name}</div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-400">{slogan}</div>
          <div className="text-xs">
            <span>{averageRating}</span>
            <span>({ratingCount})</span>
          </div>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <div className="mr-[6px] mb-[6px] rounded bg-slate-200 px-2 py-1 text-xs text-cyan-400" key={tag}>
                #{tag}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="price">
            <span>{currencySymbol + salePrice}</span>
            <span>{currencySymbol + listPrice}</span>
          </div>
          <div className="flex justify-between">
            <Button color="red" productableId={productableId} productableType={productableType}>
              免費試用
            </Button>
            <Button color="black" productableId={productableId} productableType={productableType}>
              <span className="mr-1">看更多</span>
              <span className="h-3 w-3">
                <ArrowLeft />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
