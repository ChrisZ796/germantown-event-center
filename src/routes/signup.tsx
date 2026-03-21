import { createFileRoute, useNavigate } from '@tanstack/react-router'
import styles from './login.module.css';
import { AuthenticationContext } from '../contexts/Authentication.js';
import { useContext } from 'react';
import { instance } from '../services/api.js';
import { ToastContainer, toast } from 'react-toastify';


export const Route = createFileRoute('/signup')({
  component: SignUp,
})

export default function SignUp() {
    const navigate = useNavigate();
    const { username, setUsername, password, setPassword, email, setEmail, firstname, setFirstname, lastname, setLastname } = useContext(AuthenticationContext);
    async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        try { 
            const response = await instance.post('/users', { 
                username, 
                password,
                email,
                firstname,
                lastname
            });
            if (response.status === 400) {
                toast.error("Signup failed: Please check your input and try again.");
                return;
            }
            else if ( response.status === 201) {
                toast.success("Signup successful! Redirecting to login...");
                setTimeout(() => {
                    navigate({ to: '/' });
                }, 5000)
            }
        }
        catch (error) {
            toast.error("Signup failed: An unexpected error occurred.");
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.baumansRegular}>Germantown Event Center</h1>
            <form onSubmit={handleSignUp}>
                <label className={styles.label}>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className={styles.input}
                        placeholder="Username"
                    />
                </label>
                <br />
                <label className={styles.label}>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder="Password"
                    />
                </label>
                <br />
                <label className={styles.label}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder="Email"
                    />
                </label>
                <br />
                <label className={styles.label}>
                    <input
                        type="firstname"
                        name="firstname"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                        className={styles.input}
                        placeholder="First Name"
                    />
                </label>
                <br />
                <label className={styles.label}>
                    <input
                        type="lastname"
                        name="lastname"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                        className={styles.input}
                        placeholder="Last Name"
                    />
                </label>
                <br />
                <input type="submit" value="Create Account" className={styles.submitButton} />
            </form>
            <ToastContainer />
        </div>
    );
}