
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { DeleteProductById } from '../../redux/Actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../notification/Notify'
import { ToastContainer } from 'react-toastify'

const DeleteProduct = () => {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();

  const OnHandelChange = (e) => {
    setText(e.target.value)
  }

  const OnHandelSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    dispatch(DeleteProductById(text))
    setLoading(false)



  }
  const res = useSelector((state) => state.allproduct.product)
  useEffect(() => {


    if (res.status == "success") {
      setText("")
      notify("product is added ", "success")
    }
    else if (res.status == 400 || res.status == 500) {
      notify("error on deleting  product ", "error")
    }

    else {
      notify("not completed ", "warn")
    }


  }, [res])


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
      <h1 className='text-white text-center'>Delete product</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-white'>Enter the _id of product</Form.Label>
          <Form.Control required onChange={OnHandelChange} type="text" placeholder="_id" />

        </Form.Group>


        <button className='btn btn-outline-info' onClick={OnHandelSubmit} variant="primary" type="submit">
          Submit
        </button>
      </Form>

      <ToastContainer />
    </div>
  )
}

export default DeleteProduct
