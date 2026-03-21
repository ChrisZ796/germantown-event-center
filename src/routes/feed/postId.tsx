import { createFileRoute } from '@tanstack/react-router'
import styles from './post.module.css';

export const Route = createFileRoute('/feed/postId')({
  component: PostID,
})

export default function PostID( ) {
    return (
        <h1>Post ID Page</h1>
    );
}