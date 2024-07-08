import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useSectionSelection } from '../../features/sections/hooks/useSectionSelection'

interface SectionButtonProps {
  name: string,
  image: string,
  index: number
}

export const SectionButton = ({ name, image, index }: SectionButtonProps) => {
  const webSettings = useSelector((state: RootState) => state.webSettings)
  const { handleSectionSelect, selectedSectionId } = useSectionSelection()

  function handleClick(id: number) {
    handleSectionSelect(id)
  }
  return (
    <button
      className="flex flex-col items-center w-[104px] rounded-full"
      onClick={() => handleClick(index)}
    >
      <img
        src={image}
        alt=""
        aria-hidden
        className={`object-contain object-center size-[74px] rounded-full p-0.5`}
        style={{
          boxShadow: selectedSectionId === index ? `0 0 0 2px ${webSettings.primaryColour}, 0 0 4px 4px rgba(0, 0, 0, 0.05)` : 'none',
          offsetDistance: selectedSectionId === index ? `50px` : '',
        }}
      />
      <div className="flex flex-col items-center justify-center w-full h-[62px] relative ">
        <p
          className={`w-full text-color-dark ${selectedSectionId === index ? 'font-semibold' : 'font-normal'} mt-4 mb-2`}
        >
          {name}
          <span
            className={`absolute bottom-0 left-[10px] w-4/5 h-0.5 ${selectedSectionId === index ? 'block' : 'hidden'}`}
            style={{ backgroundColor: webSettings.primaryColour }}></span>
        </p>
      </div>
    </button>
  )
}
