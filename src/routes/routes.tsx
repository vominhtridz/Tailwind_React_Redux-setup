import Home from "../pages/Home.tsx/Home"
import Login from "../pages/login/Login"
import Signup from "../pages/signup/Signup"

// Public Routes is path Limit access
export const PrivateRoutes = [
  {
    path: "/profile",
    component: Login,
  },
]
// Public Routes is path can used any where

export const PublicRoutes = [
  {
    path: "",
    component: Home,
  },
]
// Authentication Routes
export const AuthRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Signup,
  },
]
