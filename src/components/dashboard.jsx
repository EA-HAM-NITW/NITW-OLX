import React from 'react';
import { useAuth } from '../contexts/authContexts';

function Dashboard() {
    const { currentUser } = useAuth();
    console.log(currentUser);
    return (
        <div>
            <h2>Dashboard</h2>
            {currentUser ? (
                <p>Welcome, {currentUser.email}!</p>
            ) : (
                <p>You are not logged in.</p>
            )}
            <p>This is a protected route. Only authenticated users can see this.</p>
        </div>
    );
}

export default Dashboard;
