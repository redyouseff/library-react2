import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { MDBInputGroup } from 'mdb-react-ui-kit';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProduct } from '../../redux/Actions/ProductAction';

export default function Home() {
    // const [customers, setCustomers] = useState([]);
    const [, set] = useState([]);
    const [search, setSearch] = useState("");
    const [tes,settest]=useState([])
    const [loading,setLoading]=useState(true)

    const dispatch =useDispatch()

   

    useEffect(() => {
        // fetchData();
        setLoading(true)
        dispatch(GetAllProduct)
        setLoading(false)
       
        
    },[loading]);
    
    
    let customers=useSelector((state)=>state.allproduct.allProducts)
    let temp
    if(customers){
        temp=customers
    }
  



    const [filteredCustomers, setFilteredCustomers] = useState([]);

    useEffect(() => {
        setFilteredCustomers(customers);
    }, [customers]);
   

    

    const onSearchChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value === "") {
        setFilteredCustomers(temp)
        }
    };

    const onHandelSubmit = () => {
        if (search === '') {
         setFilteredCustomers(temp)
            return;
        }
        const filter=customers.filter((item,index)=>{
            return search==item.id
        })
        setFilteredCustomers(filter)
    };

    return (
        <>

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
            <div className='container'>
                <h1 className='text-center text-white'>All Product</h1>
                <MDBInputGroup className='d-flex justify-content-center w-100 H-100'>
                    <input
                        className='mt-2 me-2 bar bg-white rounded-2'
                        placeholder='Search by ID'
                        onChange={onSearchChange}
                    />
                    <button
                        onClick={onHandelSubmit}
                        className='btn btn-outline-info search text-white h-25  rounded-2'
                    >
                        <i className='icon fa-solid fa-search'></i>
                        
                    </button>
                </MDBInputGroup>
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
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>Title</th>
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>quantity</th>
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>sold</th>
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>price</th>
                            <th className='bg-black text-white' style={{ border: '1px solid white' }}>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers?filteredCustomers.map((item) => (
                            <tr key={item.id}>
                                <td style={{ border: '1px solid black' }}>{item.id}</td>
                                <td style={{ border: '1px solid black' }}>{item._id}</td>
                                <td style={{ border: '1px solid black' }}>{item.title}</td>
                                <td style={{ border: '1px solid black' }}>{item.quantity}</td>
                                <td style={{ border: '1px solid black' }}>{item.sold}</td>
                                <td style={{ border: '1px solid black' }}>{item.price}</td>
                                <td className='text-center' style={{ border: '1px solid black' }}>
                                    <Link to={`/${item._id}`} className='text-white btn btn-outline-info'>Details</Link>
                                </td>
                            </tr>
                        )):null}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
