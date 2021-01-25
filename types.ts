export interface Product {
  name: string
  slug?: string
  id: number
  images:
    | Array<{
        src: string
        alt: string
      }>
    | any
  price: string
  regular_price: string
  sale_price: string
  short_description: string
  description: string
  categories:
    | Array<{
        name: string
      }>
    | any
}

export interface Category {
  name: string
  image: { [key: string]: string }
  count: { [key: string]: number }
}
