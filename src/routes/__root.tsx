import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AuthenticationProvider } from '../contexts/Authentication.js'


function RootComponent() {
  return (
    <AuthenticationProvider>
        <Outlet />
        <TanStackRouterDevtools />
    </AuthenticationProvider>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})