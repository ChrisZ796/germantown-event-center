import { createFileRoute, RouterProvider, createRouter } from '@tanstack/react-router'
import Login from './login.tsx'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (<Login />)
}
