export interface Products {
  total: number;
  limit: number;
  page: number;
  skip: number;
  products: [
    {
      price: {
        current: number;
        currency: string;
        beforeDiscount: number;
        discountPercentage: number;
      };
      category: {
        id: string;
        name: string;
        image: string;
      };
      _id: string;
      title: string;
      description: string;
      issueDate: string;
      thumbnail: string;
      stock: number;
      rating: number;
      brand: string;
      warranty: number;
      images: [
        'https://i.imgur.com/6c1EkHS.jpg',
        'https://i.imgur.com/6WlfNht.jpg',
        'https://i.imgur.com/HU0BCBV.jpg',
        'https://i.imgur.com/RXROBLE.jpg'
      ];
    }
  ];
}
