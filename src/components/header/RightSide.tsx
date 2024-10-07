import { BarIcon, PhoneIcon } from "../../images/SVG/SVG"
import { Link } from "react-router-dom"
import Cart from "./Cart"
const RightSide = () => {
  return (
    <ul className='flex items-center'>
      <li className='hover:text-green-500 font-medium max-sm:hidden flex items-center text-[15px] max-lg:py-2 px-3  text-[#333]'>
        <div className='text-3xl px-2'>{PhoneIcon}</div>
        0379948336
      </li>
      <Cart />
      <li className='flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff]'>
        <Link
          to='/register'
          className='px-4 py-2 hover:bg-green-500 hover:text-white hover:border-white active:shadow text-sm rounded font-semibold text-green-600 border-2 border-green-500 bg-transparent'
        >
          Đăng kí
        </Link>
      </li>
      <li id='toggleOpen' className='lg:hidden'>
        <button>{BarIcon}</button>
      </li>
    </ul>
  )
}

export default RightSide
