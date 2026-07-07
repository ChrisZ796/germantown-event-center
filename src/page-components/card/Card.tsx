import { Link } from "@tanstack/react-router";
import { FaUser, FaArrowUpRightFromSquare, FaSuitcase } from "react-icons/fa6";
import styles from "./card.module.css";
import { DiReact } from "react-icons/di";

interface CardProps {
    directoryID: number;
    image?: string;
    name?: string;
    orgName?: string;
    username?: string;
    isOrg: boolean;
}

export function Card(props: CardProps) {
    const display = props.name || props.orgName;
    return (
        <article className={styles.card}>
            <div className={styles.userInfo}>
                {props.isOrg ? <FaSuitcase size={64} /> : <FaUser size={64} />}
                <div className={styles.userBox}>
                    <strong data-testid="card-name" className={styles.name}>{display}</strong>
                    <p className={styles.username}>{props.username}</p>
                </div>
            </div>
            <div>
                <Link className={styles.link} to={"/directory/$directoryID"} state={{isOrg: props.isOrg}} params={{ directoryID: props.directoryID }}><FaArrowUpRightFromSquare size={32}/></Link>
            </div>
        </article>
    )
}