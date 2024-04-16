import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import * as ROUTES from "./constants/routes"

const Dashboard = lazy(() => import("./pages/dashboard"))
const Login = lazy(() => import("./pages/login"))
const Signup = lazy(() => import("./pages/signup"))
const Profile = lazy(() => import("./pages/profile"))
const NotFound = lazy(() => import("./pages/not-found"))


export default function App() {
  return (
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
  )
}

