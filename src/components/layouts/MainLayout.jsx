import { Outlet } from "react-router-dom"
import Navigation from "../Navigation"
import Footer from "../Footer"

export default function MainLayout() {
  return (
    <>
        <Navigation/>
        <main className="py-8">
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}
