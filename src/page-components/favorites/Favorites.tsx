import styles from "./favorites.module.css"

export default function Favorites() {
    return (
        <div className={styles.container}>
            <div className={styles.favorites}>
                <img src="/icons/star.png" width="40" height="40" alt="favorites" />
                <h1 style={{display: "inline-flex", fontSize: '1.1rem', margin: 0}}>Favorites</h1>
            </div>
        </div>
    );
}