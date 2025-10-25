import { useContext } from 'react';
import styles from './login.module.css';
import { instance } from "../../services/api";
import { AuthenticationContext } from "../../contexts/Authentication";

export default function Login() {
    const { username, setUsername, password, setPassword } = useContext(AuthenticationContext);
    async function handleLogin(e) {
        e.preventDefault();
        
        try { 
            const response = await instance.post('/users/login', { 
                username, 
                password 
            });
            if ( response.status === 200) {
                console.log("Login successful:", response.data);
            }
        }
        catch (error) {
            console.error("Login failed:", error);
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={"baumans-regular"}>Germantown Event Center</h1>
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