import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionGraph from '../Graph/TransactionGraph';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductDetails } from '../../redux/Actions/ProductAction';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useQuery } from 'react-query';


export const SingleCustomer = () => {
    const [customers, setCustomers] = useState([]);
    const formatDateTime = (dateTimeString) => {
        if (!dateTimeString) return '';
        const [date, time] = dateTimeString.split('T');
        return ` ${date}    (TIME) => ${time.split('Z')[0]}`;
    };
    

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(GetProductDetails(id))

    }, []);

    const data = useSelector((state) => state.allproduct.oneProduct)
    let product;
    if (data) {
        product = data
    }

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
        <Link to={'/'} className='close position-absolute btn btn-outline-danger'>
            <i className=' fa-solid fa-close'></i>
        </Link>
        <div className="container mx-auto mt-8">
            <div className="flex justify-center">




                {
                    product ? <div key={product.id} className="text-center p-0 m-0">
                        <h2 className="text-2xl font-bold mb-2 text-white border-white ">ID: {product.id}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-white">NAME: {product.title}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-white">quantity: {product.quantity}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-white">sold: {product.sold}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-white">price: {product.price}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-white">createdAt: {formatDateTime(product.createdAt)}</h2>
                    </div> : null
                }



            </div>
            <div className="mt-8">
                <TransactionGraph customerId={id} />
            </div>
        </div>
    </>
}
