import List from '/List.svg'

export const Header = ({ bgColor }: { bgColor?: string }) => {
  return (
    <nav
      className='flex items-center justify-between text-center h-16 w-full text-white
      px-4 py-[18px]'
      style={{ backgroundColor: bgColor || '#94a3b8' }}
    >
      <span></span>
      <h3 className="font-medium text-lg">Menu</h3>
      <button>
        <img src={List} alt="" aria-hidden />
      </button>
    </nav>
  )
}
