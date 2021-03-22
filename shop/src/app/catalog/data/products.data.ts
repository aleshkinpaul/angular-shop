import { Product } from '../types/card'

export const products: Array<Product> = [
  {
    id: 1,
    company: 'Google',
    title: 'Google Pixel 4',
    rating: 3,
    price: {
      value: 66253,
      discount: 0.17,
    },
    imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7k8Q87gqlVnvE0pwBUTgrJjNmOkQtlULpWWUupejW7iVs3FaYk8M&usqp=CAc',
  },
  {
    id: 2,
    company: 'Apple',
    title: 'iPhone SE',
    rating: 4,
    price: {
      value: 11990,
    },
    available: 3,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqCXlc3TmK9Hh0TKBKnO8jtiC2mqcQ4Hi22MaxujRgNEdr0fM8zQ&usqp=CAc',
  },
  {
    id: 3,
    company: 'Huawei',
    title: 'Huawei P40 Pro',
    rating: 3,
    price: {
      value: 45000,
      discount: 0.25,
    },
    available: 7,
    imageUrl: 'https://unite4buy.ru/media/images/2020/03/23/huawei-p40-5_gZcZgrP.jpg',
  },
  {
    id: 4,
    company: 'Sony Ericsson',
    title: 'Sony Ericsson W810',
    rating: 5,
    price: {
      value: 100000,
      discount: 0.95,
    },
    available: 1,
    imageUrl: 'https://directmobileaccessories.com/media/catalog/product/cache/1/image/500x/9df78eab33525d08d6e5fb8d27136e95/s/o/sonyericw810.jpg'
  }
]
