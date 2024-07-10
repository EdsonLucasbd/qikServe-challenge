import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { addItem, CartItem, removeItem, updateItemQuantity } from '../cartItemsSlice';
import { selectTotalPrice, selectTotalQuantity, updateTotals } from '../cartTotalsSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cartItems.items);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  const addToCart = (item: CartItem) => {
    dispatch(addItem(item));
    dispatch(updateTotals(items));
  };

  const updateCartItemQuantity = (id: number, quantity: number) => {
    dispatch(updateItemQuantity({ id, quantity }));
    dispatch(updateTotals(items));
  };

  const removeFromCart = (id: number) => {
    dispatch(removeItem(id));
    dispatch(updateTotals(items));
  };

  return {
    items,
    totalQuantity,
    totalPrice,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
  };
};
