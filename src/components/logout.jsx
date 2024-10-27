import React from 'react';
import { useAuth } from '../contexts/authContexts'; 
import { doSignOut } from '../firebase/auth';

function Logout() {
    const { userLoggedIn } = useAuth();

    const handleLogout = async () => {
        try {
            await doSignOut();
            
        } catch (error) {
            console.error("Logout error", error);
        }
    };

    return (
        userLoggedIn && (
            <div>
                <h2>Logout</h2>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        )
    );
}

export default Logout;
