import React from "react";
import styles from "./post.module.css";
import { Link } from '@tanstack/react-router';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Post( post: { postID: number; title: string; description: string; thumbnailPath: string } ) {
    return (
        <div className={styles.post}>
            <Link className={styles.link} to={`/post/${post.postID}`}><FaArrowUpRightFromSquare size={24}/></Link>
            <div className={styles.header}>
                <img src={post.thumbnailPath} alt={"Image of " + post.title} />
                <h2>{post.title}</h2>
            </div>
            <p>{post.description}</p>
        </div>
    );
}
