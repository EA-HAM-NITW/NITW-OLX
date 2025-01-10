import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/authContexts';  // Importing the custom hook for auth
import TopBar from './topBar';
import BottomBar from './bottomBar';

function ItemDetails() {
    const { itemId } = useParams(); // Get itemId from URL params
    const { currentUser } = useAuth(); // Check if the user is logged in

    // Fetch item details based on itemId (mocking the item details for now)
    const item = {
        title: 'Used Laptop',
        price: '₹15,000',
        category: 'Electronics',
        description: 'A gently used laptop in good condition.',
    };

    if (!currentUser) {
        return <div>You must be logged in to view item details.</div>; // If not logged in, show a message
    }

    return (
        <div>
            <TopBar/>
            <div className="bg-light text-center py-5">
            <h2>{item.title}</h2>
                <p>Category: {item.category}</p>
                <p>Price: {item.price}</p>
                <p>{item.description}</p>
            </div>
                
            <BottomBar/>
            
        </div>
    );
}

export default ItemDetails;
