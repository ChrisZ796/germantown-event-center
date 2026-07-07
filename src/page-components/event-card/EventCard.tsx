import { Link } from "@tanstack/react-router";
import { FaUser, FaArrowUpRightFromSquare, FaSuitcase } from "react-icons/fa6";
import styles from "./eventCard.module.css";
import { DiReact } from "react-icons/di";

export function EventCard() {
    return (
        <article className={styles.eventCard}>
            <div className={styles.eventInfo}>
                <strong className={styles.eventTitle}>Post 5</strong>
                <p className={styles.eventDate}>01/02/2026</p>
            </div>
            <div>
                <Link className={styles.link} to={""} ><FaArrowUpRightFromSquare size={32}/></Link>
            </div>
        </article>
    )
}