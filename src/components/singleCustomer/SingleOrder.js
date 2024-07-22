import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionGraph from '../Graph/TransactionGraph';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductDetails } from '../../redux/Actions/ProductAction';
import { Container, Nav, Navbar, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { GetOrderDetails } from '../../redux/Actions/orderAction';


export const SingleOrder = () => {
    const [customers, setCustomers] = useState([]);
    const dispatch = useDispatch();
    const [loading,setLoading]=useState(true)

    const { id } = useParams();
 

    useEffect(() => {
        setLoading(true)
        dispatch(GetOrderDetails(id))
        setLoading(false)

    }, []);

    const data = useSelector((state) => state.allorder.order)
    let product;
    if (data) {
        product = data.data
    }
    useEffect(()=>{
        
    },[loading])
   
    return <>
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
        <Link to={'/AllOrder'} className='close position-absolute btn btn-outline-danger'>
            <i className=' fa-solid fa-close'></i>
        </Link>
        <div className="container mx-auto mt-8">
            <div className="flex justify-center">




                {
                    product ? <div key={product.id} className="text-center p-0 m-0">
                     
                        <h2 className="text-2xl font-bold mb-2 text-white">NAME: {product.name}</h2> 
                        <h2 className="text-2xl font-bold mb-2 text-white">price: {product.price}</h2> 
                    </div> : null
                }


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
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>name</th>
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>quantity</th>
                           
                           
                        </tr>
                    </thead>
                    <tbody>
                        {product?
                        
                        product.order.map((item) => (
                            <tr key={item.id}>
                                <td style={{ border: '1px solid black' }}>{item.id}</td>
                                <td style={{ border: '1px solid black' }}>{item.name}</td>
                                <td style={{ border: '1px solid black' }}>{item.quantity}</td>
                            
                            </tr>
                        )):null}
                    </tbody>
                </Table>

            </div>
            <div className="mt-8">
              
            </div>
        </div>
    </>
}
