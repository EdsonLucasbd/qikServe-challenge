import { useEffect, useState } from 'react'
import List from '/List.svg'

export const Header = ({ bgColor }: { bgColor?: string }) => {
  const [option, setOption] = useState<'menu' | 'login' | 'contact'>('menu')
  const [isMobile, setIsMobile] = useState(false)

  function handleOption(option: 'menu' | 'login' | 'contact') {
    setOption(option)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <nav
      className='flex items-center justify-between lg:justify-center text-center h-16 lg:h-[52px] w-full text-white
      px-4 py-[18px]'
      style={{ backgroundColor: bgColor || '#94a3b8' }}
    >
      <span className='block lg:hidden'></span>
      <h3
        className={`font-medium lg:font-normal text-lg uppercase lg:w-[232px] cursor-pointer
        ${option === 'menu' && !isMobile ? 'border-b-[5px] py-[10px]' : 'border-none py-[14.5px]'} transition-all ease-in-out duration-150`}
        onClick={() => handleOption('menu')}
      >
        Menu
      </h3>
      <h3
        className={`font-medium lg:font-normal text-lg uppercase lg:w-[232px] hidden lg:block cursor-pointer
        ${option === 'login' && !isMobile ? 'border-b-[5px] py-[10px]' : 'border-none py-[14.5px]'} transition-all ease-in-out duration-150`}
        onClick={() => handleOption('login')}
      >
        Entrar
      </h3>
      <h3
        className={`font-medium lg:font-normal text-lg uppercase lg:w-[232px] hidden lg:block cursor-pointer
        ${option === 'contact' && !isMobile ? 'border-b-[5px] py-[10px]' : 'border-none py-[14.5px]'} transition-all ease-in-out duration-150`}
        onClick={() => handleOption('contact')}
      >
        Contato
      </h3>
      <button className='block lg:hidden'>
        <img src={List} alt="" aria-hidden />
      </button>
    </nav>
  )
}
