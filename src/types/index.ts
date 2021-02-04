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
  short_description: string
  description: string
  categories: Array<{
    name: string
  }>
}

export interface Category {
  id: number
  name: string
  image: { [key: string]: string }
  count: { [key: string]: number }
}

export interface CartItem {
  key: string
  product_id: number
  quantity: number
  product_price: string
  product_name: string
  image: string
  slug: string
  line_total: number
}
