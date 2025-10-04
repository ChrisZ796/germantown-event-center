import { useState, useEffect, useRef } from "react";
import Post from "./Post";

export default function Feed() {
    const [posts, setPosts] = useState([
        { id: 1, title: "Post Title 1", content: "This is the first post." },
        { id: 2, title: "Post Title 2", content: "This is the second post." },
        { id: 3, title: "Post Title 3", content: "This is the third post." },
        { id: 4, title: "Post Title 4", content: "This is the fourth post." },
        { id: 5, title: "Post Title 5", content: "This is the fifth post." },
        { id: 6, title: "Post Title 6", content: "This is the sixth post." },
        { id: 7, title: "Post Title 7", content: "This is the seventh post." },
        { id: 8, title: "Post Title 8", content: "This is the eighth post." },
        { id: 9, title: "Post Title 9", content: "This is the ninth post." },
        { id: 10, title: "Post Title 10", content: "This is the tenth post." }
    ]);
    const contentRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
            const el = contentRef.current;
            if (!el) return;
            if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
                setPosts(prev => {
                    const newPosts = [
                        ...prev,
                        { id: prev.length + 1, title: `Post Title ${prev.length + 1}`, content: `This is post #${prev.length + 1}.` }
                    ];
                    /*
                    if (newPosts.length > 20) {
                        newPosts.shift();
                    }
                    */
                    return newPosts;
                });
            }
        };
        const el = contentRef.current;
        if (el) el.addEventListener('scroll', handleScroll);
        return () => {
            if (el) el.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div ref={contentRef} style={{height: '85vh', overflowY: 'auto'}}>
                {posts.map(post => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        </div>
    );
}