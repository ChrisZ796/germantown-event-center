import React from "react";
import styles from "./post.module.css";

export default function Post( post: { title: string; content: string } ) {
    return (
        <div className={styles.post}>
            <h2>{post.title}</h2>
            <img src="./icons/share.png" alt="share" />
            <p>{post.content}</p>
        </div>
    );
}
