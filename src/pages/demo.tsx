import type { NextPage } from 'next';
import { toCamel } from 'convert-keys';

import Card from 'components/Card';
import type { IAttributes } from 'types/infoCard';

const data = [
  {
    id: 'picked_product_flash_sale',
    type: 'picked_product_list',
    attributes: {
      name: '本⽉熱銷推薦',
      custom: [
        {
          id: '1',
          type: 'saleable_product',
          attributes: {
            productable_id: '1',
            name: '神猜解多益 ULTIMATE 神上加神套組',
            slogan: '⾃學多益也能拿⾼分！坊間唯⼀，形同名師從旁教學的神猜解多益三書套組',
            shop_cover_image_url:
              'https://public.wordup.com.tw/shop/books/bundle_god_guess_toeic_package/Cover_bundle_god_guess_toeic_package_new_D.png',
            students_count: 100,
            currency: 'TWD',
            list_price: '2000',
            sale_price: '1500',
            tags: ['名師', '模擬考', '閱讀測驗', '聽⼒測驗', '題庫', '多益', '雙11特價'],
            average_rating: 4.8,
            rating_count: 100,
          },
        },
        {
          id: '2',
          type: 'saleable_product',
          attributes: {
            productable_id: '2',
            name: 'Cindy 情境式多益單字課',
            slogan: '專屬進度表+線上讀書會，⽤零碎時間攻佔多益⾼分榜!',
            learn_with: null,
            shop_cover_image_url: 'https://public.wordup.com.tw/shop/books/VClass/Cover_vclass_cindy_P.png',
            students_count: 150,
            list_price: '4900',
            sale_price: '2450',
            tags: ['線上課程', '單字', '多益', '影⽚'],
            average_rating: 4.51,
            rating_count: 50,
          },
        },
        {
          id: '3',
          type: 'saleable_product',
          attributes: {
            productable_id: '3',
            name: 'iBT 新托福學術字彙「勝」經：必背精華版',
            slogan: '單字死背記不住？透過閱讀來加強你的單字量吧！',
            shop_cover_image_url:
              'https://public.wordup.com.tw/shop/books/best-new_toefl_vocab/Cover_best-new_toefl_vocab_new_D.png',
            students_count: 300,
            list_price: '420',
            sale_price: '330',
            tags: ['⽂章', '閱讀', '托福', '單字'],
            average_rating: 4.46,
            rating_count: 10000,
          },
        },
        {
          id: '4',
          type: 'saleable_product',
          attributes: {
            productable_type: 'Course',
            productable_id: '4',
            name: '怪物講師教學團隊的7000「單字」＋「⽂法」',
            slogan: '只背單字不夠⽤？⼀本書讓你學會7000單字+⽂法',
            shop_cover_image_url: 'https://public.wordup.com.tw/shop/books/monster_7000/Cover_monster_7000_new_D.png',
            students_count: 5900,
            list_price: '449',
            sale_price: '390',
            tags: ['英⽂基礎', '⽂法', '單字', '多益', '7000單'],
            average_rating: 4.2,
            rating_count: 99,
          },
        },
      ],
    },
  },
];

const Demo: NextPage = () => {
  const { custom, name } = data[0].attributes;
  return (
    <div className="flex h-[600px] w-full justify-center overflow-hidden bg-slate-100 py-5 text-black">
      <div className="h-full w-screen max-w-3xl">
        <div className="my-2 flex items-center">
          <hr className="grow" />
          <div>{name}</div>
          <hr className="grow" />
        </div>
        <div className="flex w-full snap-x space-x-3 overflow-x-scroll ">
          {custom.map(({ id, attributes }) => {
            const convertedAttributes = toCamel(attributes) as IAttributes;
            return (
              <Card
                key={id}
                averageRating={convertedAttributes.averageRating}
                currency={convertedAttributes.currency}
                learnWith={convertedAttributes.learnWith}
                listPrice={convertedAttributes.listPrice}
                name={convertedAttributes.name}
                productableId={convertedAttributes.productableId}
                productableType={convertedAttributes.productableType}
                salePrice={convertedAttributes.salePrice}
                shopCoverImageUrl={convertedAttributes.shopCoverImageUrl}
                slogan={convertedAttributes.slogan}
                studentsCount={convertedAttributes.studentsCount}
                ratingCount={convertedAttributes.ratingCount}
                tags={convertedAttributes.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Demo;
