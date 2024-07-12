import { useEffect, useState } from "react"
import { useCart } from "../../features/cart/hooks/useCart"
import { useWebSettings } from "../../features/webSettings/hooks/useWebSettings"
import { Item } from "../../types/sections"
import { CartItem } from "../../features/cart/cartItemsSlice"

interface ListItemProps extends Partial<Item> {
  id?: number
}

export const ListItem = ({ name, images, description, price, id }: ListItemProps) => {
  const { webSettings } = useWebSettings()
  const { items } = useCart()
  const [quantity, setQuantity] = useState(0)
  const [itemInCart, setItemInCart] = useState<CartItem | null>(null)

  useEffect(() => {
    const find = items.find((item) => item.id === id)
    if (find) {
      setItemInCart(find)
      setQuantity(find.quantity)
    } else {
      setItemInCart(null)
    }
  }, [items, id])

  return (
    <div className="flex flex-row w-full h-[117px] items-center justify-between gap-x-4 lg:items-start">
      <div className="flex flex-col gap-1 lg:w-2/3">
        <div className="flex items-center gap-2">
          <span
            className={`${itemInCart && itemInCart.quantity > 0 ? 'flex' : 'hidden'} items-center 
              justify-center size-[18px] font-medium text-sm rounded text-white`}
            style={{ backgroundColor: webSettings?.primaryColour }}
          >
            {quantity}
          </span>
          <p className="font-medium text-color-dark text-base">
            {name}
          </p>
        </div>
        <p className="font-light text-color-dark-gary line-clamp-2 lg:line-clamp-1 text-base">{description}</p>
        <p className="font-medium text-color-dark-gary text-base">R${price?.toFixed(2)}</p>
      </div>
      <img src={images?.[0].image} alt="" aria-hidden className="rounded-[4px] object-cover object-center w-32 h-[85px]" />
    </div>
  )
}
