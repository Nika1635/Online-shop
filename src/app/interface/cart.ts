export interface Cart {
    total: {
        price: {
            current: number,
            beforeDiscount: number
        },
        quantity: number,
        products: number
    },
    _id: string,
    userId: string,
    createdAt: string,
    products: [
        {
            quantity: number,
            pricePerQuantity: number,
            beforeDiscountPrice: number,
            productId: string
        }
    ]
}
