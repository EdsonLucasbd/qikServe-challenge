import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import { addItem, CartItem, removeItem, updateItemQuantity } from '../cartItemsSlice'

export const useCart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cartItems.items)
  const totalQuantity = useSelector((state: RootState) => state.cartItems.totalQuantity)
  const totalPrice = useSelector((state: RootState) => state.cartItems.totalAmount)

  const addToCart = (item: CartItem) => {
    dispatch(addItem(item))
  }

  const updateCartItemQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      dispatch(removeItem(id))
      dispatch(updateItemQuantity({ id, quantity }))
      console.log('zerou', quantity)
      console.log('id', id)
    } else {
      dispatch(updateItemQuantity({ id, quantity }))
    }
  }

  const removeFromCart = (id: number) => {
    dispatch(removeItem(id))
  }

  return {
    items,
    totalQuantity,
    totalPrice,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
  }
}
