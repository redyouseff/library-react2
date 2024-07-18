import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { InsertProduct } from '../../redux/Actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../notification/Notify'
import { ToastContainer, toast } from 'react-toastify';

 const  CreateProduct=()=> {
    const dispatch=useDispatch();

    const [formData,setFormData]=useState({
        title: '',
        price: '',
        quantity: '',
        id: ''
    })
const onHandelChange=(e)=>{
    const {name,value}=e.target
    setFormData({
        ...formData,
        [name]:value

    })

}
const [loading,setLoading]=useState(true)


const res=useSelector((state)=>state.allproduct.product)
const onHandelSubmit= async(e)=>{
    e.preventDefault();
    setLoading(true)
   await dispatch(InsertProduct(formData))
   setLoading(false)

}


useEffect(()=>{
    console.log(res)
if(res.status==200){
    setFormData({
        title: '',
        price: '',
        quantity: '',
        id: ''
    })
    notify("product is added ","success")
}
else if(res.status==400||res.status==500){
    notify("error on adding product ","error")
}
else{
    notify("not completed ","warn")
}

},[loading])
    
  return (
    <div>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        
          <Nav className=" bg-dark w-100 text-black">
          <Nav.Link className='NavLink m-auto text-white' href="/">Home</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="http://localhost:3000/CreateOrder">create Order</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="http://localhost:3000/CreateProduct">create Product</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="http://localhost:3000/UpdateProduct">update quantity</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="http://localhost:3000/DeleteProduct">delete Product</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="http://localhost:3000/AllOrder">all order</Nav.Link>
          </Nav>
        </Container>
      </Navbar>   
     <Container>
     <h1 className='text-white text-center'>Create product</h1>

     <Form>
      <Form.Group className="mb-3 text-white"  controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
        <Form.Control onChange={onHandelChange} name='title' type="text" placeholder="title" required />

        <Form.Label>price</Form.Label>
        <Form.Control onChange={onHandelChange} name='price' type="text" placeholder="price" required />

        <Form.Label>quantity</Form.Label>
        <Form.Control  onChange={onHandelChange} name='quantity' type="text" placeholder="quantity" required />

        <Form.Label>id</Form.Label>
        <Form.Control onChange={onHandelChange} name='id' type="text" placeholder="id"  required/>
       
      </Form.Group>    

     
     
      <button className='btn btn-outline-info ms-2' onClick={onHandelSubmit} variant="primary" type="submit">
        Submit
      </button> 
    </Form>
     </Container>
     <ToastContainer />
    </div>
  )
}
export default CreateProduct
