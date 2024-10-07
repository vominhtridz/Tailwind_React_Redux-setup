import { useState } from "react"
import { CartIcon } from "../../images/SVG/SVG"

const Cart = () => {
  const [isCart, setIsCart] = useState<boolean>(false)

  const ShowCart = () => setIsCart(!isCart)
  return (
    <li className='max-lg:py-2 px-3 cursor-pointer relative ' onClick={ShowCart}>
      <span className='relative'>
        {CartIcon}
        <span className='absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white'>0</span>
      </span>
      <Cart />
      <div className='absolute top-full right-0 min-w-md shadow border border-gray-50 bg-white p-2 rounded-sm'>
        <div className=''></div>
      </div>
    </li>
  )
}

export default Cart
