import styles from './description.module.css';
import { EventCard } from '../event-card/EventCard.tsx';
import { useState, useEffect } from "react";
import { instance } from "../../services/api.js";
import { FaInbox } from "react-icons/fa6";

type DescriptionProps = {
    isOrg?: boolean | undefined;
    orgID: number;
    bio: string;
    website: string | undefined;
    email: string | undefined;
    office: string | undefined;
};

type EventCardProps = {
    postID: number;
    title: string;
    eventDate: string;
};

export function Description({ isOrg, orgID, bio, website, email, office }: DescriptionProps) {
        const [posts, setPosts] = useState<EventCardProps[]>([]);
        if (isOrg) {
        async function retrieveEvents() {
            try {
                console.log(orgID);

                const response = await instance.get(`/organizations/${orgID}`);

                console.log(response.data);

                const postsData = response.data.post || [];

                const newPosts: EventCardProps[] = postsData.map((item: any) => ({
                    postID: item.postID,
                    title: item.title,
                    eventDate: item.eventDate
                }));

                console.log(newPosts);
                setPosts(newPosts);
            }
            catch(error) {
                console.error("Unable to retrieve posts", error);
            }
        }
        useEffect(() => {
            retrieveEvents();
        }, []);
    }

    return (
        <>
            <article className={styles.description}>
                <p>{bio}</p>
                <section>
                    <div className={styles.orgDetails}>
                        <strong>Website:</strong>
                        <p>{website}</p>
                    </div>
                    <div className={styles.orgDetails}>
                        <strong>Email:</strong>
                        <p>{email}</p>
                    </div>
                    <div className={styles.orgDetails}>
                        <strong>Office:</strong>
                        <p>{office}</p>
                    </div>
                </section>
            </article>
            <article className={styles.eventsHosted}>
                <h1>Events Hosted <FaInbox className={styles.icon}/></h1>
                <div className={styles.eventCardsContainer}>
                    {posts.map(post => (
                        <EventCard title={post.title} eventDate={post.eventDate} postID={post.postID} key={post.postID} />
                    ))}
                </div>                
            </article>
        </>
    );
}