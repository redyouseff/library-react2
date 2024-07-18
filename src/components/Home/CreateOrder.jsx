import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { InsertOrder } from '../../redux/Actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../notification/Notify'
import { ToastContainer } from 'react-toastify'

const CreateOrder = () => {
    const [id,setId]=useState("");
    const [quantity,setQuantity]=useState("");
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(true)

    const [order,setOrder]=useState({
        order:[]
    })

    const OnHandelSubmit=(e)=>{
        e.preventDefault();
       setOrder({
        order:[...order.order,{ id:id,
            quantity:quantity
       
           }]
    })
    

    }
    const OnHandelChange=(e)=>{
        setQuantity(e.target.value)
        
    }
    const OnHandelChangeid=(e)=>{
        setId(e.target.value)

    }
    const OnHandelDelete=(e)=>{
        setOrder({
            order:order.order.filter((item,index)=>item.id!=e.target.id)
        })
    }

    useEffect(()=>{
       
    },[order])
    const res=useSelector((state)=>state.allorder.order);

  const OnHandelCreate=(e)=>{
    e.preventDefault();
    setLoading(true);
    dispatch(InsertOrder(order))
    setLoading(false)

    
  }
  useEffect(()=>{
    console.log(res.status)
    if(res.status==200){
        
        
         notify("product is added ","success")
         setOrder({
            order:[]
        })
     }
     else if(res.status==400||res.status==500){
         notify("error on deleting  product ","error")
     }
     
     else{
         notify("not completed ","warn")
     }
    
  

  },[loading,res])

  return <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        
          <Nav className=" bg-dark w-100 text-black">
          <Nav.Link className='NavLink m-auto text-white' href="/">Home</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react-inky.vercel.app/CreateOrder">create Order</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react-inky.vercel.app/CreateProduct">create Product</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react-inky.vercel.app/UpdateProduct">update quantity</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react-inky.vercel.app/DeleteProduct">delete Product</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react-inky.vercel.app/AllOrder">all order</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div>
      <Container>
        

      </Container>
      <h1 className='text-white text-center'>Create orders</h1>

      { <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">

      <Form.Label className='text-white mb-1 mt-3'>Enter the id of product :</Form.Label>
      <Form.Control required onChange={OnHandelChangeid} type="text" placeholder="id" />


        <Form.Label className='text-white mb-0 mt-3'>Enter the quantity to update :</Form.Label>
        <Form.Control required onChange={OnHandelChange} type="text" placeholder="qunatity" />


   
       
      </Form.Group>

      
      <button className='btn btn-outline-info' onClick={OnHandelSubmit} variant="primary" type="submit">
        add to order
      </button>
    </Form> }

    <Table
                    className='Table'
                    responsive="sm"
                    style={{ border: '1px solid black', borderCollapse: 'collapse' }}
                    bordered hover
                    variant="dark"
                >
                    <thead>
                        <tr>
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>ID</th>
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>_id</th>
                          
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>Delete</th>
                           

                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {order.order.map((item) => (
                            <tr key={item.id}>
                                <td style={{ border: '1px solid black' }}>{item.id}</td>
                                <td style={{ border: '1px solid black' }}>{item.quantity}</td>
                                <td className='text-center' style={{ border: '1px solid black' }}>
                                    <button className='btn btn-outline-info' key={item.id} id={item.id} onClick={OnHandelDelete}>delete</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <button onClick={OnHandelCreate}  className='btn btn-outline-info'>Save</button>
                <ToastContainer />
    </div>
  </>
}

export default CreateOrder
