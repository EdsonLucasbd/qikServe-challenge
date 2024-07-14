import { Minus, Plus } from "@phosphor-icons/react"
import { useCart } from "../features/cart/hooks/useCart"
import { useWebSettings } from "../features/webSettings/hooks/useWebSettings"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
// import { useEffect, useState } from "react"

export const Cart = () => {
  const cart = useCart()
  const { webSettings } = useWebSettings()

  return (
    <>
      <div className="hidden lg:flex flex-col w-80 h-fit bg-[#F8F9FA] drop-shadow-lg">
        <p className="font-medium text-color-dark-gary text-2xl px-6 py-[22px]">Carrinho</p>
        <div className="flex bg-white">
          {cart.items.length < 1
            ? <p className="text-base text-color-dark-gary p-6">Seu carrinho está vazio</p>
            :
            <div className="flex flex-col w-full divide-y divide-[#DADADA]">
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

      <div className={`flex flex-col lg:hidden w-full fixed bottom-0 left-0 ${cart.items.length < 1 ? 'h-[67px]' : 'h-[147px]'} backdrop-blur-sm`}>
        <div>
          <p
            className="text-base font-bold p-6 text-center underline"
            style={{ color: webSettings?.primaryColour }}
          >
            View allergy information
          </p>
        </div>
        {
          cart.items.length > 0 &&
          <Dialog>
            <DialogTrigger className="pb-6" asChild>
              <div className="flex items-center justify-center h-full w-full">
                <button
                  className="flex items-center justify-center w-10/12 h-12 gap-2 
                    border-none rounded-full text-white text-lg font-medium"
                  style={{
                    backgroundColor: webSettings?.primaryColour
                  }}
                >
                  <span>Your basket</span> <span>•</span> <span>{cart.items.length} item</span>
                </button>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0">
              <DialogHeader className="py-[23px] bg-white">
                <DialogTitle className="font-medium text-lg text-color-dark pb-5 border-b border-b-[#DADADA]">Basket</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col w-full h-full divide-y divide-[#DADADA] bg-white">
                {cart.items.map((item) => (
                  <div className="flex flex-col pt-2" key={item.id}>
                    <div className="flex flex-col px-4">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-base text-color-dark">{item.name}</p>
                        <p className="text-base font-medium">R${item.price.toFixed(2)}</p>
                      </div>
                      <p className={`${item.option ? 'flex' : 'hidden'} text-base text-color-light-gray`}>{item.option}</p>
                    </div>
                    <div className="flex gap-x-1 items-center justify-between p-2 w-[30%] ml-2 mb-4">
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
                <div className="flex h-full p-4 pb-96 w-full items-center justify-between bg-[#F8F9FA] border-t border-t-[#DADADA]">
                  <p className="text-2xl font-light text-color-dark">Total:</p>
                  <p className="text-2xl font-bold text-color-dark">R${cart.totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <DialogFooter className="items-center pb-6 h-full">
                <DialogClose asChild>
                  <button
                    className="flex items-center justify-center w-10/12 h-12 gap-2 border-none rounded-full text-white text-lg font-medium"
                    style={{ backgroundColor: webSettings?.primaryColour }}>
                    Checkout now
                  </button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      </div>
    </>
  )
}
