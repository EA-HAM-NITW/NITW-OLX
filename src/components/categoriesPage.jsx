import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/authContexts';  // Importing the custom hook for auth
import TopBar from './topBar';
import BottomBar from './bottomBar';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Categories(){
    const {categoryName} = useParams();
    const { currentUser } = useAuth(); 
    const navigate = useNavigate();
    
    //fetch items based on category
    const items = [
        { id: 1, title: 'Lenovo', price: '₹15,000', category: 'Electronics' },
        { id: 2, title: 'MAC', price: '₹50,000', category: 'Electronics' },
        { id: 3, title: 'DELL', price: '₹50,000', category: 'Electronics' },
        { id: 4, title: 'HP', price: '₹30,000', category: 'Electronics' },
    ];

    const handleViewDetails = (itemId) => {
        if (!currentUser) {
            navigate('/login');  // If not logged in, redirect to login page
        } else {
            navigate(`/item-details/${itemId}`);  // If logged in, go to item details page
        }
    };
    
    return(
        <div>
            <TopBar/>
                <Container className='mt-5'>
                    <h2 className="mb-4">{categoryName}</h2>
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
    )
}

export default Categories;