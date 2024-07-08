import React from 'react'
import { VenueSections } from '../../types/sections'
import { useQuery } from '@tanstack/react-query'
import { SectionButton } from './SectionButton'

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

  return (
    <section className='flex w-full gap-3 h-[190px] items-center justify-center'>
      {
        query.data?.sections.map(({ id, name, images }, index) => (
          <SectionButton
            key={id}
            name={name}
            image={images[0].image}
            index={index}
          />
        ))
      }
    </section>
  )
}
