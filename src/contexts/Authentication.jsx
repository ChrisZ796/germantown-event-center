import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export function AuthenticationProvider({ children }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <AuthenticationContext.Provider value={{ username, setUsername, password, setPassword }}>
            {children}
        </AuthenticationContext.Provider>
    );
}