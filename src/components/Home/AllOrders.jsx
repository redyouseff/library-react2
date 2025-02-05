import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useFetcher } from 'react-router-dom'
import { GetOrder } from '../../redux/Actions/orderAction'
import { DeleteOrders } from '../../redux/Actions/orderAction'

const AllOrders = () => {
const dispatch=useDispatch();
const [loading,setLoading]=useState(true)

useEffect(()=>{
    setLoading(true)
    dispatch(GetOrder)
    setLoading(false)
},[])
const res=useSelector((state)=>state.allorder.allorder)
let temp 
if(res){
    temp=res.data
    
}
useEffect(()=>{

},[loading])



const OnHandelSubmit=(e)=>{
    e.preventDefault();
    setLoading(true)
    dispatch(DeleteOrders)
    setLoading(false)
    setLoading(true)
    dispatch(GetOrder)

   
}
console.log(temp)
  return (
    <div>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
        
          <Nav className=" bg-dark w-100 text-black">
          <Nav.Link className='NavLink m-auto text-white' href="/">Home</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react2.vercel.app/CreateOrder">create Order</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react2.vercel.app/CreateProduct">create Product</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react2.vercel.app/UpdateProduct">update quantity</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react2.vercel.app/DeleteProduct">delete Product</Nav.Link>
            <Nav.Link className='NavLink m-auto text-white' href="https://library-react2.vercel.app/AllOrder">all order</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1 className='text-white text-center'>All Orders</h1>
      <Table
                    className='Table'
                    responsive="sm"
                    style={{ border: '1px solid black', borderCollapse: 'collapse' }}
                    bordered hover
                    variant="dark"
                >
                    <thead>
                        <tr>
                        <th className='bg-black text-white' style={{ border: '1px solid white' }}>name</th>
                        <th className='bg-black text-white' style={{ border: '1px solid white' }}>price</th>
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>_id</th>
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}> Details </th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            {temp?temp.map((item) => (
                                <tr key={item.id}>
                                   <td style={{ border: '1px solid black' }}>{item.name}</td>
                                    <td style={{ border: '1px solid black' }}>{item.price}</td>
                                    <td style={{ border: '1px solid black' }}>{item._id}</td>
                                    <td className='text-center' style={{ border: '1px solid black' }}>
                                    <Link to={`/order/${item._id}`} className='text-white btn btn-outline-info'>Details</Link>
                                </td>
                                
                                </tr>
                            )):null}
                            {
                               res?  <h3> totail Money : {res.totail}$</h3>:null
                            }
                    </tbody>
                </Table>
                <button onClick={OnHandelSubmit} className='btn btn-outline-info'> clear all orders</button>
    </div>
  )
}

export default AllOrders


