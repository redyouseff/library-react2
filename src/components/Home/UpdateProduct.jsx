import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import { UpdateProductById } from '../../redux/Actions/ProductAction'
import notify from '../notification/Notify'
import { ToastContainer } from 'react-toastify'
const UpdateProduct = () => {
    const [id,setId]=useState("")
    const [quantity,setQuantity]=useState({
        quantity:''
    })
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(true)

    const OnHandelChange=(e)=>{
    setQuantity({
    quantity:e.target.value
    })
    }
    const OnHandelSubmit=(e)=>{
        e.preventDefault();
        setLoading(true)
        dispatch(UpdateProductById(id,quantity))
        setLoading(false)
        
        
    }
    const OnHandelChangeid=(e)=>{
    setId(e.target.value)
    }
    const res=useSelector((state)=>state.allproduct.product)
    useEffect(()=>{
        if(res.status==200){
      
            notify("product is updated ","success")
           setId("")
           setQuantity({
              quantity:''
           })

             
         }
         else if(res.status==400||res.status==500){
             notify("error on deleting  product ","error")
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
      <h1 className='text-white text-center'>Update Product</h1>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">

      <Form.Label className='text-white'>Enter the _id of product</Form.Label>
      <Form.Control required onChange={OnHandelChangeid} type="text" placeholder="_id" />
        <Form.Label className='text-white'>Enter the quantity to update</Form.Label>

        <Form.Control required onChange={OnHandelChange} type="text" placeholder="qunatity" />
       
      </Form.Group>

      
      <button className='btn btn-outline-info' onClick={OnHandelSubmit} variant="primary" type="submit">
        Submit
      </button>
    </Form>
    <ToastContainer />
    </div>
  )
}

export default UpdateProduct
