import { ReactNode } from 'react';

export interface IAttributes {
  averageRating: number;
  currency: string;
  learnWith?: null;
  listPrice: string;
  name: string;
  productableId: string;
  productableType?: string;
  salePrice: string;
  shopCoverImageUrl: string;
  slogan: string;
  studentsCount: number;
  ratingCount: number;
  tags: Array<string>;
}

export interface ICardButton {
  children: ReactNode;
  color: string;
  productableId: string;
  productableType?: string;
}
