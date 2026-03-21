import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { router } from './routes/routes.tsx'
import { AuthenticationProvider } from "./contexts/Authentication.js";

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
        <AuthenticationProvider><RouterProvider router={router} /></AuthenticationProvider>
    </StrictMode>,
  )
}
