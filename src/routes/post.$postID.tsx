import Sidebar from "../page-components/sidebar/Sidebar.tsx";
import Favorites from "../page-components/favorites/Favorites.tsx";
import {createFileRoute} from "@tanstack/react-router"
import {instance } from "../services/api.js";
import { useEffect, useState } from "react";
import styles from "./post.module.css";

export const Route = createFileRoute('/post/$postID')({
  component: Post
});

function Post() {
  const postID = window.location.pathname.split('/').pop();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await instance.get(`/posts/${postID}`);
        const { post } = response.data;
        setPost(post);
        console.log('Fetched post:', post);
      } catch (error) {
        console.log('Failed to fetch post', error);
      }
    };

    if (postID) fetchPost();
  }, [postID]);

  return (
    <div className='container'>
      <Sidebar/>
      <div className = {styles.post}>
        <h1>{String (post?.title)}</h1>
      </div>
      <div className = 'favorites'><Favorites /></div>
    </div>
  );
}