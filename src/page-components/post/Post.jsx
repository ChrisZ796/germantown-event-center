import React from "react";
import styles from "./post.module.css";

export default function Post({ post }) {
    return (
        <div className="post">
            <h2 className={styles.h2}>{post.title}</h2>
            <img src="./icons/share.png" width="30" height="30" className={styles.img}></img>
            <p>{post.content}</p>
        </div>
    );
}
