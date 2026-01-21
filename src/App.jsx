import { Route, Routes } from 'react-router-dom'
import './App.css'
import './pages/user/Home' 
import Header from './components/common/Header'  
import Home from './pages/user/Home'
import Menu from './pages/user/Menu'
import Order from './pages/user/Order'
import About from './pages/user/About'
import Contact from './pages/user/Contact'
import Cart from './pages/user/Cart'
import Footer from './components/common/Footer'
import Auth from './components/pages/Auth'
import AdminSlidebar from './Admin/component/AdminSlidebar'
import AdminDashboard from './Admin/pages/AdminDashboard'
import AdminUsers from './Admin/pages/AdminUsers'
import AdminOrders from './Admin/pages/AdminOrders'
import AddFooditems from './Admin/pages/AddFooditems'
import AdminOrderHistory from './Admin/pages/AdminOrderHistory'


function App() {

  return (
    <>
    
    <Header/>
     <Routes>

      
      {/* user */}
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

        {/* common */}
        <Route path='/login' element={<Auth/>} />
        <Route path='/signup' element={<Auth Register/>} />

        {/* admin */}

        <Route path='/adminsidebar'  element={<AdminSlidebar/>}/>
        <Route path='/admindashboard'  element={<AdminDashboard/>}/>
        <Route path='/adminusers'  element={<AdminUsers/>}/>
        <Route path='/adminorders'  element={<AdminOrders/>}/>
        <Route path='/adminfooditems'  element={<AddFooditems/>}/>
        <Route path='/orderhistory'  element={<AdminOrderHistory/>}/>
        
        
     </Routes>
     <Footer />
    </>
  )
}

export default App
