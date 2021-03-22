
export interface Product {
  id: number
  company?: string
  title?: string
  rating?: number
  price?: ProductPrice
  available?: number
  imageUrl?: string
}

export interface ProductPrice {
  value: number
  discount?: number
}