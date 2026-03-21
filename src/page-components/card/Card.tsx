import { Link } from "@tanstack/react-router";
import { FaUser, FaArrowUpRightFromSquare, FaSuitcase } from "react-icons/fa6";
import styles from "./card.module.css";

interface CardProps {
    image?: string;
    name: string;
    orgName?: string;
    username: string;
    isOrg: boolean;
}

export function Card({ image, name, orgName, username, isOrg }: CardProps) {

    return (
        <article className={styles.card}>
            <div className={styles.userInfo}>
                {isOrg ? <FaSuitcase size={64} /> : <FaUser size={64} />}
                <div className={styles.userBox}>
                    <strong className={styles.name}>{name || orgName}</strong>
                    <p className={styles.username}>{username}</p>
                </div>
            </div>
            <div>
                <Link to={``}><FaArrowUpRightFromSquare size={32}/></Link>
            </div>
        </article>
    )
}