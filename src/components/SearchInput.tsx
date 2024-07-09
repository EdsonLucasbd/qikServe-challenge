import { MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

export const SearchInput = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  function handleSearch() {
    if (inputRef.current?.value) {
      const inputValue = inputRef.current.value
      console.log('Buscando...', inputValue)

      inputRef.current.value = ''
    }
  }

  function handleSearchEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()

      if (inputRef.current?.value) {
        const inputValue = inputRef.current.value
        console.log('Buscando...', inputValue)

        inputRef.current.value = ''
      }
    }
  }

  return (
    <div className='relative p-4 lg:p-0 lg:my-[6px] flex items-center justify-center w-full h-[72px] lg:h-11'>
      <span
        className='absolute left-4 lg:left-0 flex items-center justify-center w-[41.88px] h-10'
        onClick={handleSearch}
      >
        <MagnifyingGlass size={20} className='text-[#8A94A4]' />
      </span>
      <input
        ref={inputRef}
        className='w-full h-full rounded-[7.29px] border-[0.91px] border-[#8A94A4]
          pl-[41.88px] lg:placeholder:text-[#2C2C2C] lg:placeholder:text-base'
        type="text"
        placeholder='Search menu items'
        onKeyUp={handleSearchEnter}
      />
    </div>
  )
}
