import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/404'

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout/>,
      errorElement: <Page404/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
