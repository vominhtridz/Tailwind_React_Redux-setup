import { Link } from "react-router-dom"

const options = [
  {
    path: "/",
    title: "Trang Chủ",
  },
  {
    path: "/",
    title: "Phụ kiện",
  },
  {
    path: "/",
    title: "Đồ ngủ",
  },
]
const HeaderNavigate = () => {
  const getOptions = () =>
    options.map((option, index) => (
      <li className='max-lg:border-b max-lg:py-3 px-3' key={index}>
        <Link to={option.path} className='hover:text-yellow-300 text-white text-[15px] font-medium block'>
          {option.title}
        </Link>
      </li>
    ))

  return (
    <ul className='lg:flex lg:flex-wrap lg:items-center lg:justify-center px-10 py-3 bg-green-500 min-h-[46px] gap-4 max-lg:space-y-4 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
      {getOptions()}
    </ul>
  )
}

export default HeaderNavigate
