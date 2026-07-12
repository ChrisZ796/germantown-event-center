import { Link } from "@tanstack/react-router";
import { FaUser, FaArrowUpRightFromSquare, FaSuitcase } from "react-icons/fa6";
import styles from "./eventCard.module.css";
import { DiReact } from "react-icons/di";

export function EventCard({ postID, title, eventDate }: { postID: number; title: string; eventDate: string }) {
    return (
        <article className={styles.eventCard}>
            <div className={styles.eventInfo}>
                <strong className={styles.eventTitle}>{title}</strong>
                <p className={styles.eventDate}>{eventDate}</p>
            </div>
            <div>
                <Link className={styles.link} to={`/post/${postID}`} ><FaArrowUpRightFromSquare size={32}/></Link>
            </div>
        </article>
    )
}