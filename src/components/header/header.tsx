import { Link } from "react-router-dom"
import Search from "./Search/Search"
import HeaderNavigate from "./HeaderNavigate"
import RightSide from "./RightSide"
const Header = () => {
  return (
    <header className='shadow-md  font-[sans-serif] tracking-wide relative z-50'>
      <section className='md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[80px] max-lg:min-h-[60px]'>
        <Link to='/' className='max-sm:w-full max-sm:mb-3 shrink-0'>
          <img src='https://readymadeui.com/readymadeui.svg' alt='logo' className='w-[160px]' />
        </Link>

        <div className='flex flex-wrap w-full items-center'>
          <Search />
          <div className='ml-auto max-lg:mt-4'>
            <RightSide />
          </div>
        </div>
      </section>

      <div
        id='collapseMenu'
        className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'
      >
        <button id='toggleClose' className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns='http://www.w3.org/2000/svg' className='w-4 fill-black' viewBox='0 0 320.591 320.591'>
            <path
              d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
              data-original='#000000'
            ></path>
            <path
              d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
              data-original='#000000'
            ></path>
          </svg>
        </button>

        <HeaderNavigate />
      </div>
    </header>
  )
}

export default Header
