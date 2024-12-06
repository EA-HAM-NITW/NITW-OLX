import React, {useState} from 'react';
import { useAuth } from '../contexts/authContexts';
import { doSignInUserWithEmailAndPassword } from '../firebase/auth';

function Login() {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await doSignInUserWithEmailAndPassword(email, password);
            window.location.href = '/dashboard'; // Redirect after login
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {userLoggedIn && <p>You are already logged in!</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;