import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import Root from './__root.tsx'
import Login from './login.tsx'
import Home from './home.tsx'
import Signup from './signup.tsx'
import Feed from './feed/index.tsx'
import PostId from './feed/postId.tsx'

const rootRoute = createRootRoute({ component: Root })
const loginRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Login })
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/home', component: Home })
const signupRoute = createRoute({ getParentRoute: () => rootRoute, path: '/signup', component: Signup })
const feedRoute = createRoute({ getParentRoute: () => rootRoute, path: '/feed', component: Feed })
const postIdRoute = createRoute({ getParentRoute: () => feedRoute, path: '/:postId', component: PostId })

export const router = createRouter({
  routeTree: rootRoute.addChildren([loginRoute, homeRoute, signupRoute, feedRoute, postIdRoute]),
})