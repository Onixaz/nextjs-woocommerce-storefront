type ProductsTypes = {
  name: string
  slug?: string
  id: number
  images: Array<{
    src: string
  }>
  price: string
}

export default ProductsTypes
