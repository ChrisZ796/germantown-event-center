import styles from "./favorites.module.css"
import { FaRegStar } from "react-icons/fa6";

export default function Favorites() {
    return (
        <div className={styles.container}>
            <div className={styles.favorites}>
                <FaRegStar size={32} className={styles.icon} />
                <h1>Favorites</h1>
            </div>
        </div>
    );
}