import React, { useContext, useRef } from 'react'
import { Loader } from '../../../styles/utils'
import { CartContext } from '../../../context/cart'
import { Product } from '../../../types'
import * as AddToCartFormStyles from './styled'
import { updateCart } from '../../../utils/functions'
import useSWR from 'swr'

interface UpdateCartButtonProps {
  product: Product
}

const AddToCartForm: React.FC<UpdateCartButtonProps> = ({ product }) => {
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)
  const quantityRef = useRef<any>(null)

  const handleAddToCart = async (e: React.SyntheticEvent, item: Product, quantity: number) => {
    e.preventDefault()
    //lazy form validation :)
    quantity = quantity > 0 ? quantity : 1

    setIsUpdating(true)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/add-item?cart_key=${cart.key}`,
        {
          method: 'POST',
          body: JSON.stringify({
            product_id: String(item.id),
            quantity: quantity,
            return_cart: true,
            //adding image for cart page
            cart_item_data: { image: item.images[0].src, slug: item.slug },
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const data = await res.json()

      setCart(() => updateCart(cart, data))
      setIsUpdating(false)
    } catch (error) {
      console.log(error)
      setIsUpdating(false)
    }
  }

  return (
    <AddToCartFormStyles.Form>
      <AddToCartFormStyles.InputField
        type="number"
        defaultValue="1"
        min="1"
        ref={quantityRef}
      ></AddToCartFormStyles.InputField>

      <AddToCartFormStyles.Btn
        disabled={isUpdating}
        onClick={(e) => handleAddToCart(e, product, parseInt(quantityRef.current.value))}
      >
        {isUpdating ? <Loader /> : 'Add To Cart'}
      </AddToCartFormStyles.Btn>
    </AddToCartFormStyles.Form>
  )
}

export default AddToCartForm
