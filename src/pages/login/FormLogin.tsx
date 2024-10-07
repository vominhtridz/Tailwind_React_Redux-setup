import { Link } from "react-router-dom"
import AuthBtn from "../../components/button/users/AuthBtn"

const FormLogin = () => {
  return (
    <form className='space-y-4'>
      <div className='mb-8'>
        <h3 className='text-gray-800 text-3xl font-extrabold uppercase font-sans'>Đăng Nhập</h3>
        <p className='text-gray-500 text-sm mt-4 leading-relaxed'>
          Đăng nhập vào tài khoản của bạn và khám phá một thế giới khả năng. Cuộc hành trình của bạn bắt đầu từ đây.
        </p>
      </div>

      <div>
        <label className='text-gray-800 text-sm mb-2 block '>Tên Đăng Nhập</label>
        <div className='relative flex items-center'>
          <input
            name='username'
            type='text'
            required
            className='w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600'
            placeholder='Nhập Tên Đăng Nhập...'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#bbb'
            stroke='#bbb'
            className='w-[18px] h-[18px] absolute right-4'
            viewBox='0 0 24 24'
          >
            <circle cx='10' cy='7' r='6' data-original='#000000'></circle>
            <path
              d='M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z'
              data-original='#000000'
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <label className='text-gray-800 text-sm mb-2 block'>Mật khẩu</label>
        <div className='relative flex items-center'>
          <input
            name='password'
            type='password'
            required
            className='w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600'
            placeholder='Nhập Mật Khẩu...'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#bbb'
            stroke='#bbb'
            className='w-[18px] h-[18px] absolute right-4 cursor-pointer'
            viewBox='0 0 128 128'
          >
            <path
              d='M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z'
              data-original='#000000'
            ></path>
          </svg>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-4'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='remember-me'
            type='checkbox'
            className='h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
          />
          <label htmlFor='remember-me' className='ml-3 block text-sm text-gray-800'>
            Nhớ mật khẩu
          </label>
        </div>

        <div className='text-sm'>
          <Link to='/forgot/password' className='text-blue-600 hover:underline font-semibold'>
            Quên Mật Khẩu
          </Link>
        </div>
      </div>

      <div className='!mt-8'>
        <AuthBtn text='Đăng Nhập' />
      </div>

      <p className='text-sm !mt-8 text-center text-gray-800'>
        Chưa có tài khoản ?
        <Link to='/register' className='text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap'>
          Đăng Kí
        </Link>
      </p>
    </form>
  )
}

export default FormLogin
