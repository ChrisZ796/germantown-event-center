import { createFileRoute } from '@tanstack/react-router'
import Login from './login.js'
import { AuthenticationProvider } from '../contexts/Authentication.js'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return <AuthenticationProvider><Login /></AuthenticationProvider>
}
