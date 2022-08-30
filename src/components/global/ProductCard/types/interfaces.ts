export interface IProductCard extends IProductInfo, IProductAddToCart { }

export interface IProductInfo {
  productName: string
  price: string
}

export interface IProductAddToCart {
  department: string
}