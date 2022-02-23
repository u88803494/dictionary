interface IAttributes {
  productable_id: string;
  name: string;
  slogan: string;
  shop_cover_image_url: string;
  students_count: number;
  currency: string;
  list_price: string;
  sale_price: string;
  tags: string[];
  average_rating: number;
  rating_count: number;
  learn_with?: null;
  productable_type?: string;
}

export interface ICard {
  attributes: Array<>;
}
