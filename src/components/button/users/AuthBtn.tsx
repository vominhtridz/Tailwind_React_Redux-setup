interface AuthBtnType {
  rest?: any
  text: string
}

const AuthBtn = ({ text, ...rest }: AuthBtnType) => {
  return (
    <button
      type='button'
      className='w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
      {...rest}
    >
      {text}
    </button>
  )
}

export default AuthBtn
