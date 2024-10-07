import Header from "../header/header"
import Footer from "../footer/footer"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <div className=''>
      <Header />
      <div className=''>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
