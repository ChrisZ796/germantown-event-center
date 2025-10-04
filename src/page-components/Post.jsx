import React from "react";

export default function Post({ post }) {
    return (
        <div className="post">
            <h2 style = {{display:'inline-flex'}}>{post.title}</h2>
            <img src = "./icons/share.png" width = "30" height = "30" style = {{cursor:'pointer', imageRendering:'crisp-edges', position:'relative', right:'-77%'}}></img>
            <p>{post.content}</p>
        </div>
    );
}
