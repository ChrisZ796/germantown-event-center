import React, { createContext, useState } from "react";
export interface AuthenticationContextType {
    username: string;
    setUsername: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
    firstname: string;
    setFirstname: (firstname: string) => void;
    lastname: string;
    setLastname: (lastname: string) => void;
    email: string;
    setEmail: (email: string) => void;
}
export const AuthenticationContext = createContext<AuthenticationContextType>({} as AuthenticationContextType);

export function AuthenticationProvider({ children }: { children: React.ReactNode }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    return (
        <AuthenticationContext.Provider value={{ username, setUsername, password, setPassword, firstname, setFirstname, lastname, setLastname, email, setEmail }}>
            {children}
        </AuthenticationContext.Provider>
    );
}