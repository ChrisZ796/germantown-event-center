import styles from "./favorites.module.css"

export default function Favorites() {
    return (
        <div className={styles.container}>
            <div classname={styles.favorites}>
                <img src="/icons/star.png" width="40" height="40" style={{paddingTop: 20, paddingRight: 8}}></img>
                <h1 style={{display: "inline-flex"}}>Favorites</h1>
            </div>
        </div>
    );
}