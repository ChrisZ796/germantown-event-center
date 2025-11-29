import Post from "../post/Post";
import styles from "./feed.module.css";

export default function Feed() {
    const posts:Array<{title:string;content:string}> = [];

    return (
        <div className={styles.container}>
            <div className={styles.feed}>
                {posts.map(post => (
                    <Post title={post.title} content={post.content} key={post.title} />
                ))}
            </div>
        </div>
    );
}