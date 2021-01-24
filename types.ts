export interface Product {
  name: string
  slug?: string
  id: number
  images: Array<{
    src: string
    alt: string
  }>
  price: string
  regular_price: string
  sale_price: string
}

export interface Category {
  name: string
  image: { [key: string]: string }
  count: { [key: string]: number }
}
