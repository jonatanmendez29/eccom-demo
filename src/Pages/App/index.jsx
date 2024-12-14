import './App.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Account from '../MyAccount'
import Order from '../MyOrder'
import Orders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Navbar from '../../Components/Navbar'

const AppRouters = () =>
{
  let routers = useRoutes([
    { path: '/',element: <Home/>},
    { path: '/my-account',element: <Account/>},
    { path: '/my-order',element: <Order/>},
    { path: '/my-orders',element: <Orders/>},
    { path: '/sing-in',element: <SingIn/>},
    { path: '/*',element: <NotFound/>},
  ])
  return routers
}

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <AppRouters />
    </BrowserRouter>
  )
}

export default App
