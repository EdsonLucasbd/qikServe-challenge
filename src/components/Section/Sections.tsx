import { VenueSections } from '../../types/sections'
import { useQuery } from '@tanstack/react-query'
import { SectionButton } from './SectionButton'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { ListItem } from './ListItem'
import { useSectionSelection } from '../../features/sections/hooks/useSectionSelection'
import { Item } from '../Item'

async function getSections() {
  return (await fetch(`${import.meta.env.VITE_API_URL}/challenge/menu`).then((res) =>
    res.json()
  )) as VenueSections
}

function useSections() {
  const query = useQuery<VenueSections>({ queryKey: ['Sections'], queryFn: getSections })

  return query
}
export const Sections = () => {
  const query = useSections()
  const { handleSectionSelect, selectedSectionId } = useSectionSelection()

  return (
    <section
      className='flex flex-col w-full items-center justify-center pt-6 
        bg-white lg:w-[600px] lg:items-start lg:mb-[35px] lg:drop-shadow-lg'
    >
      <div className='flex gap-3 items-center justify-center lg:px-4'>
        {
          query.data?.sections.map(({ id, name, images, position }) => (
            <SectionButton
              key={id}
              name={name}
              image={images[0].image}
              index={id}
              position={position}
            />
          ))
        }
      </div>
      <div className='flex flex-col w-full lg:px-4'>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={`${selectedSectionId}`}
          onValueChange={() => handleSectionSelect}
        >
          {
            query.data?.sections.map(({ id, name, items }) => (
              <AccordionItem key={id} value={`${id}`} className="font-medium text-2xl text-color-dark" id={`${id}`}>
                <AccordionTrigger onClick={() => handleSectionSelect(id)}>{name}</AccordionTrigger>
                {
                  items.map(({ id, name, images, description, price, modifiers }) => (
                    <Item images={images} description={description} title={name} modifiers={modifiers} key={id} mainOptionId={id}>
                      <AccordionContent>
                        <ListItem name={name} images={images} description={description} price={price} id={id} />
                      </AccordionContent>
                    </Item>
                  ))
                }
              </AccordionItem>
            ))
          }

        </Accordion>
      </div>
    </section>
  )
}
