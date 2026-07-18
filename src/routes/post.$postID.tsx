import Sidebar from "@page-components/sidebar/Sidebar.tsx";
import Favorites from "@page-components/favorites/Favorites.tsx";
import {createFileRoute, useRouter, Link, useLocation} from "@tanstack/react-router"
import {instance } from "../services/api.js";
import { useEffect, useState } from "react";
import styles from "./post.module.css";
import { Container } from "@page-components/container/Container.tsx";
import { Header } from "@page-components/header/Header.tsx";
import { FaBoxArchive, FaArrowLeft } from "react-icons/fa6";

export const Route = createFileRoute('/post/$postID')({
  component: Post
});

function Post() {
  const router = useRouter();
  const location = useLocation();
  location.state.isOrg = true;

  const postID = window.location.pathname.split('/').pop();
  const [post, setPost] = useState<any>(null);

  const [orgInfoResponse, setOrgInfoResponse] = useState<any>(null);
  const [isOrg, setIsOrg] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await instance.get(`/posts/${postID}`);
        const { post } = response.data;
        setPost(post);
        console.log('Fetched post:', post);

        const orgID = post?.orgID;
        const orgInfoResponse = await instance.get(`/organizations/${orgID}`);
        setOrgInfoResponse(orgInfoResponse);        

      } catch (error) {
        console.log('Failed to fetch post', error);
      }
    };

    if (postID) fetchPost();
  }, [postID]);

  return (
    <div className = {styles.container}>
      <Sidebar/>
      <Container className = {styles.postContainer}>
          <Header 
          name={orgInfoResponse?.data?.orgName || 'Organization Name'} 
          username={undefined} 
          isOrg={isOrg} 
          />
          <section className={styles.content}>
            <div className={styles.eventContainer}>
              <header className={styles.eventHeader}>
                <FaBoxArchive size={48} className={styles.icon}/>
                <div className={styles.eventInfo}>
                  <strong className={styles.eventTitle}>{post?.title}</strong>
                </div>
                <Link to={`/directory/${post?.orgID}`} ><FaArrowLeft size={32} className={styles.backButton}/></Link>
              </header>
            </div>
            <article className={styles.description}>
                <section>
                    <div className={styles.postDetails}>
                        <strong>Event Date:</strong>
                        <p>{post?.eventDate}</p>
                    </div>
                    <div className={styles.postDetails}>
                        <strong>Event Location:</strong>
                        <p>{post?.eventLocation}</p>
                    </div>
                </section>
                <p>{post?.description}</p>
            </article>
          </section>
      </Container>
      <section className={styles.regContainer}>
        <div className={styles.regBar}>
          <p>Status Bar</p>
        </div>
        <div className={styles.regStatus}>
          <strong>{post?.numberInterested} / {post?.volunteersNeeded} Volunteer Slots Filled</strong>
        </div>
        <div className={styles.regButtonContainer}>
          <button className={styles.regButton}>Register</button>
        </div>
      </section>
      <Favorites />
    </div>
  );
}