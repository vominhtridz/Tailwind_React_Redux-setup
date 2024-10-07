import DefaultLayout from "./components/DefaultLayout/DefaultLayout"
import { AuthRoutes, PublicRoutes, PrivateRoutes } from "./routes/routes"
import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          {/* Public Routes */}
          {PublicRoutes?.map(route => <Route path={route.path} element={<route.component />} />)}
          {/* Private Routes */}
          {PrivateRoutes?.map(route => <Route path={route.path} element={<route.component />} />)}
          {/* Authentication Routes */}
          {AuthRoutes?.map(route => <Route path={route.path} element={<route.component />} />)}
        </Route>
      </Routes>
    </>
  )
}

export default App
