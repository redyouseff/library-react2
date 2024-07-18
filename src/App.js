import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SingleCustomer } from './components/singleCustomer/SingleCustomer';
import CreateProduct from './components/Home/CreateProduct';
import UpdateProduct from './components/Home/UpdateProduct';
import DeleteProduct from './components/Home/DeleteProduct.jsx';
import CreateOrder from './components/Home/CreateOrder';
import AllOrders from './components/Home/AllOrders.jsx';



function App() {
  return <>
  <div className='app'>
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<SingleCustomer />}></Route>
        <Route path='/CreateProduct' element={<CreateProduct></CreateProduct>}></Route>
        <Route path='/DeleteProduct' element={<DeleteProduct></DeleteProduct>}></Route>
        <Route path='/UpdateProduct' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/CreateOrder' element={<CreateOrder></CreateOrder>}></Route>
        <Route path='/AllOrder' element={<AllOrders></AllOrders>}></Route>

      </Routes>
    </BrowserRouter>
    </div>

  </>


}

export default App;
