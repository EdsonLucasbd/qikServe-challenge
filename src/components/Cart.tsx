import { Minus, Plus } from "@phosphor-icons/react"
import { useCart } from "../features/cart/hooks/useCart"
import { useWebSettings } from "../features/webSettings/hooks/useWebSettings"
// import { useEffect, useState } from "react"

export const Cart = () => {
  const cart = useCart()
  const { webSettings } = useWebSettings()

  return (
    <div className="hidden lg:flex flex-col w-80 h-fit bg-[#F8F9FA] drop-shadow-lg">
      <p className="font-medium text-color-dark-gary text-2xl px-6 py-[22px]">Carrinho</p>
      <div className="flex bg-white">
        {cart.items.length < 1
          ? <p className="text-base text-color-dark-gary p-6">Seu carrinho está vazio</p>
          :
          <div className="flex flex-col w-full">
            {cart.items.map((item) => (
              <div className="flex flex-col pt-2" key={item.id}>
                <div className="flex flex-col px-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-base text-color-dark">{item.name}</p>
                    <p className="text-base font-medium">R${item.price.toFixed(2)}</p>
                  </div>
                  <p className={`${item.option ? 'flex' : 'hidden'} text-base text-color-light-gray`}>{item.option}</p>
                </div>
                <div className="flex gap-x-1 items-center justify-between p-2 w-[30%] ml-2">
                  <button
                    className="flex justify-center items-center size-5 border-none rounded-full"
                    onClick={() => cart.updateCartItemQuantity(item.id, item.quantity - 1)}
                    style={{
                      backgroundColor: webSettings?.primaryColour
                    }}
                  >
                    <Minus size={12} className="text-white w-[18px]" weight="bold" />
                  </button>

                  <span className="font-bold text-base">{item.quantity}</span>

                  <button
                    className="flex justify-center items-center size-5 border-none rounded-full"
                    onClick={() => cart.updateCartItemQuantity(item.id, item.quantity + 1)}
                    style={{
                      backgroundColor: webSettings?.primaryColour
                    }}
                  >
                    <Plus size={12} className="text-white w-[18px]" weight="bold" />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex p-4 w-full items-center justify-between bg-[#F8F9FA] border-t border-t-[#DADADA]">
              <p className="text-2xl font-light text-color-dark">Total:</p>
              <p className="text-2xl font-bold text-color-dark">R${cart.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
