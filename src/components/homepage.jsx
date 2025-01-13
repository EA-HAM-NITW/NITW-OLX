import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/authContexts';  // Importing the custom hook for auth
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import TopBar from './topBar';
import BottomBar from './bottomBar';

function Homepage() {
    const { currentUser } = useAuth();  // Using the custom hook to check if the user is logged in
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();  // Initialize useNavigate

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch("http://localhost:8080");

                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.text();
                setData(result);
                console.log(result);
                
            } catch(err){
                setError(err.message);
            }
        }

        fetchData();
    },[]);

    const items = [
        { id: 1, title: 'Used Laptop', price: '₹15,000', category: 'Electronics' },
        { id: 2, title: 'Old Textbooks', price: '₹500', category: 'Books' },
        { id: 3, title: 'Sofa Set', price: '₹5,000', category: 'Furniture' },
        { id: 4, title: 'T-shirt (M)', price: '₹300', category: 'Clothing' },
    ];

    const categories = [
        {id: 1, name: 'Electronics'},
        {id: 2, name: 'Books'},
        {id: 3, name: 'Furniture'},
        {id: 4, name: 'Clothing'},
    ]

    // Function to handle View Details button click
    const handleViewDetails = (itemId) => {
        console.log(currentUser);
        
        if (!currentUser) {
            navigate('/login');  // If not logged in, redirect to login page
        } else {
            navigate(`/item-details/${itemId}`);  // If logged in, go to item details page
        }
    };

    const handleCategories = (categoryName) => {
        if (!currentUser) {
            navigate('/login');  // If not logged in, redirect to login page
        } else {
            navigate(`/category-details/${categoryName}`);  // If logged in, go to item details page
        }
    }

    const handleSell = () =>{
        if(!currentUser) navigate('/login');
        else navigate('/sell');
    }

    return (
        <div>
            <TopBar/>

            <div className="bg-light text-center py-5">
                <h1>Welcome to CampusMarket</h1>
                <p>Buy and sell items with ease on your campus!</p>
                <Button variant="primary" onClick={()=>handleSell()}>Sell or Rent Out an Item</Button>
            </div>

            <Container className="mt-5">
                <h2 className="mb-4">Featured Items</h2>
                <Row>
                    {items.map(item => (
                        <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        Category: {item.category} <br />
                                        Price: {item.price}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleViewDetails(item.id)}>
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="mt-5">
                <h2 className="mb-4">Categories</h2>
                <Row>
                    {categories.map(category => (
                        <Col key={category.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title style={{cursor:'pointer'}} onClick={()=> handleCategories(category.name)}>{category.name}</Card.Title>
                                    
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <BottomBar/>
        </div>
    );
}

export default Homepage;
