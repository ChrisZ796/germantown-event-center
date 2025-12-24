import styles from "./favorites.module.css"

export default function Favorites() {
    return (
        <div className={styles.container}>
            <div className={styles.favorites}>
                <img src="/icons/star.png" alt="favorites" className={styles.icon} />
                <h1>Favorites</h1>
            </div>
        </div>
    );
}