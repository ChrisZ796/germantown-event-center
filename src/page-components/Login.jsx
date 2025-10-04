import { useState } from 'react';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onLogin) {
            onLogin(username, password);
        }
    };
    return (
        <div style = {{backgroundColor:'	#002366', fontFamily:'Josefin Sans', minHeight: "99vh"}}>
            <div>
                <img src = "GEC.png" width = "200" height = "200" style = {{paddingTop:50, marginLeft:'45%'}}></img>
                <h1 style = {{textAlign: 'center', padding:20, paddingTop:50, color:'white', fontSize:50}}>Germantown Event Center</h1>
                <form onSubmit={handleSubmit}>
                    <label style = {{marginLeft:'42%', fontSize: 30, padding:20}}>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            style = {{margin:10, padding:10}}
                        />
                    </label>
                    <br />
                    <label style = {{marginLeft:'42%', fontSize: 30, padding:20}}>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            style = {{margin:10, padding:10}}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Login" style = {{fontFamily:'Josefin Sans', fontSize:40, marginLeft:'47%', fontWeight:'bold', padding:10, marginTop:40}} />
                </form>
            </div>
        </div>
    );
}