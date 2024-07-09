import { Item } from "../../types/sections"

interface ListItemProps extends Partial<Item> {
  id?: number
}

export const ListItem = ({ name, images, description, price }: ListItemProps) => {
  return (
    <div className="flex flex-row w-full h-[117px] items-center justify-between gap-x-4 lg:items-start">
      <div className="flex flex-col gap-1 lg:w-2/3">
        <p className="font-medium text-color-dark text-base">{name}</p>
        <p className="font-light text-color-dark-gary line-clamp-2 lg:line-clamp-1 text-base">{description}</p>
        <p className="font-medium text-color-dark-gary text-base">R${price?.toFixed(2)}</p>
      </div>
      <img src={images?.[0].image} alt="" aria-hidden className="rounded-[4px] object-cover object-center w-32 h-[85px]" />
    </div>
  )
}
