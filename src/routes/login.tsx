import { use, useContext } from 'react';
import styles from './login.module.css';
import { instance } from "../services/api.js";
import { AuthenticationContext } from "../contexts/Authentication.js";
import { useNavigate } from "@tanstack/react-router";

export default function Login() {
    const navigate = useNavigate();
    const { username, setUsername, password, setPassword } = useContext(AuthenticationContext);
    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        try { 
            const response = await instance.post('/users/login', { 
                username, 
                password 
            });
            if (response.status === 401) {
                console.error("Login failed: Unauthorized");
                return;
            }
            else if ( response.status === 200) {
                console.log("Login successful:", response.data);
                navigate({ to: '/home'});
            }
        }
        catch (error) {
            console.error("Login failed:", error);
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.baumansRegular}>Germantown Event Center</h1>
            <form onSubmit={handleLogin}>
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
                <input type="submit" value="Login" className={styles.submitButton} />
            </form>
        </div>
    );
}