import Post from "../post/Post.js";
import styles from "./feed.module.css";
import { useState, useEffect } from "react";
import { instance } from "../../services/api.js";

type FeedProps = {
    postID:number;
    title:string;
    description:string;
    thumbnailPath:string
}

export default function Feed() {
    const [posts, setPosts] = useState<FeedProps[]>([]);

    async function populateFeed() {
        try {
            const response = await instance.get('/posts/feed');
            const newPosts:FeedProps[] = response.data.posts.map((item:FeedProps) => {
                return {
                    postID: item.postID,
                    title: item.title,
                    description: item.description,
                    thumbnailPath: item.thumbnailPath
                }
            })
            setPosts([...posts, ...newPosts]);
            console.log(newPosts)
        }
        catch(error) {
            console.error("Unable to generate posts", error);
        }
    }
    useEffect(() => {
        populateFeed();
    }, []);

    

    return (
        <div className={styles.container}>
            <div className={styles.feed}>
                {posts.map(post => (
                    <Post title={post.title} description={post.description} postID={post.postID} key={post.postID} thumbnailPath={post.thumbnailPath}/>
                ))}
            </div>
        </div>
    );
}