import { Minus, Plus } from "@phosphor-icons/react"
import { Image, Modifier } from "../features/sections/sectionsSlice"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { ScrollArea } from "./ui/scroll-area"
import { useWebSettings } from "../features/webSettings/hooks/useWebSettings"
import { useEffect, useState } from "react"
import { useCart } from "../features/cart/hooks/useCart"
import { CartItem } from "../features/cart/cartItemsSlice"

interface ItemProps {
  children: React.ReactNode,
  images: Image[] | undefined,
  title: string,
  description: string | null,
  modifiers: Modifier[] | undefined
  mainOptionId: number
}

export const Item = ({ children, images, description, title, modifiers, mainOptionId }: ItemProps) => {
  const [quantity, setQuantity] = useState(0)
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null)
  const [buttonValue, setButtonValue] = useState(0)
  const { addToCart } = useCart()
  const { webSettings } = useWebSettings()


  function addQuantity() {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
  }

  function removeQuantity() {
    if (quantity === 0) return
    const newQuantity = quantity - 1
    setQuantity(newQuantity)
  }

  function handleSelectedItem({ id, name, price, quantity, option }: CartItem) {
    setSelectedItem({ id, name, price, quantity, option })
    if (quantity === 0) {
      setQuantity(1)
    }
  }

  useEffect(() => {
    if (selectedItem) {
      setButtonValue(selectedItem.price * (quantity > 0 ? quantity : 1))
      setSelectedItem({ ...selectedItem, quantity })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity])

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="p-0">
        <ScrollArea className="h-screen">
          <DialogHeader>
            <img src={images?.[0].image} alt="" aria-hidden className="h-[265px] w-full object-cover object-center" />
            <DialogTitle className="font-bold text-2xl text-color-dark text-start pt-4 pb-2 px-4">{title}</DialogTitle>
            <DialogDescription className="text-base text-start px-4">{description}</DialogDescription>
          </DialogHeader>
          {modifiers && modifiers.map(({ id, name, items, minChoices }) => (
            <div className="flex flex-col" key={id}>
              <div className="px-6 py-4 bg-[#F8F9FA]">
                <p className="text-base font-bold text-color-dark-gary">{name}</p>
                <p className="text-color-light-gray text-base">Select {minChoices} option</p>
              </div>
              <RadioGroup>
                {items.map(({ id, name, price }) => (
                  <div
                    className="flex items-center justify-between w-full px-6 py-4 last:shadow-sm"
                    key={id}
                    onClick={() => handleSelectedItem({ id: mainOptionId, name: title, price, quantity, option: name })}
                  >
                    <label htmlFor={`${name}`} className="flex flex-col w-full gap-y-1 font-medium text-base text-color-dark">
                      {name}
                      <span className="font-normal text-color-dark-gary">R${price.toFixed(2)}</span>
                    </label>
                    <RadioGroupItem
                      value={`${price.toFixed(2)}`}
                      id={`${name}`}
                      className="border-[3px] border-color-light-gray"
                    />
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
          <DialogFooter className="flex flex-col items-center justify-center lg:flex-col gap-2.5 px-6 h-[149px] bg-[#F8F9FA]">
            <div className="flex items-center justify-center gap-4">
              <button
                className="flex justify-center items-center size-8 bg-[#DADADA] border-none rounded-full"
                onClick={removeQuantity}
              >
                <Minus size={24} className="text-color-light-gray w-[18px]" weight="bold" />
              </button>
              <p className="text-2xl font-bold">{quantity}</p>
              <button
                className="flex justify-center items-center size-8 border-none rounded-full"
                style={{
                  backgroundColor: webSettings.primaryColour
                }}
                onClick={addQuantity}
              >
                <Plus size={24} className="w-[18px] text-white" weight="bold" />
              </button>
            </div>
            <DialogClose asChild>
              <button className={`flex items-center justify-center w-full h-12 
              rounded-[40px] text-white text-lg font-medium gap-2 disabled:text-color-light-gray`}
                style={{
                  backgroundColor: quantity > 0 ? webSettings.primaryColour : '#DADADA'
                }}
                disabled={quantity < 1}
                onClick={() => addToCart(selectedItem as CartItem)}
              >
                Add to Order <span>•</span> <span>${buttonValue.toFixed(2) ?? '00.00'}</span>
              </button>
            </DialogClose>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
