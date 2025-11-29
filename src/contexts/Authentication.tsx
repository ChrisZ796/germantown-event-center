import React, { createContext, useState } from "react";
export interface AuthenticationContextType {
    username: string;
    setUsername: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
}
export const AuthenticationContext = createContext<AuthenticationContextType>({} as AuthenticationContextType);

export function AuthenticationProvider({ children }: { children: React.ReactNode }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <AuthenticationContext.Provider value={{ username, setUsername, password, setPassword }}>
            {children}
        </AuthenticationContext.Provider>
    );
}