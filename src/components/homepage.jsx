import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/authContexts';  // Importing the custom hook for auth
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import TopBar from './topBar';
import BottomBar from './bottomBar';

function Homepage() {
    const { currentUser } = useAuth();  // Using the custom hook to check if the user is logged in
    const navigate = useNavigate();  // Initialize useNavigate

    const items = [
        { id: 1, title: 'Used Laptop', price: '₹15,000', category: 'Electronics' },
        { id: 2, title: 'Old Textbooks', price: '₹500', category: 'Books' },
        { id: 3, title: 'Sofa Set', price: '₹5,000', category: 'Furniture' },
        { id: 4, title: 'T-shirt (M)', price: '₹300', category: 'Clothing' },
    ];

    // Function to handle View Details button click
    const handleViewDetails = (itemId) => {
        if (!currentUser) {
            navigate('/login');  // If not logged in, redirect to login page
        } else {
            navigate(`/item-details/${itemId}`);  // If logged in, go to item details page
        }
    };

    return (
        <div>
            <TopBar/>

            <div className="bg-light text-center py-5">
                <h1>Welcome to CampusMarket</h1>
                <p>Buy and sell items with ease on your campus!</p>
                <Button variant="primary" href="/post-ad">Sell an Item</Button>
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

            <BottomBar/>
        </div>
    );
}

export default Homepage;
