import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import UserContext from './context/user'
import useAuthListener from './hooks/useAuthListner'
import * as ROUTES from "./constants/routes"
import useUser from './hooks/useUser'

const Dashboard = lazy(() => import("./pages/dashboard"))
const Login = lazy(() => import("./pages/login"))
const Signup = lazy(() => import("./pages/signup"))
const Profile = lazy(() => import("./pages/profile"))
const NotFound = lazy(() => import("./pages/not-found"))


export default function App() {
  const user = useAuthListener()

  return (
    <UserContext.Provider value={user}>
      <Suspense fallback={<p>loading...</p>}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.DASHBOARD}>
              <Route index element={<Dashboard />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.SIGNUP} element={<Signup />} />
              <Route path={ROUTES.PROFILE} element={<Profile />} />
              <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </UserContext.Provider>
  )
}

