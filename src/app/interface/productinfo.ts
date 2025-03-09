import { Categories } from "./categories";

export interface Productinfo {
  price: {
    current: number;
    currency: string;
    beforeDiscount: number;
    discountPercentage: number;
  };
  category: Categories;
  _id: string;
  title: string;
  description: string;
  issueDate: string;
  thumbnail: string;
  stock: number;
  rating: number;
  brand: string;
  warranty: number;
  images: [];
  ratings: [
    {
      userId: string;
      value: number;
      createdAt: string;
    },
  ];
}
