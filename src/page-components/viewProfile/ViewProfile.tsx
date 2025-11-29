import styles from "./viewProfile.module.css";

export default function ViewProfile( profile: {title:string;content:string} ) {
    return (
        <div className={styles.profileCard}>
            <div className={styles.avatar} aria-hidden>
                <img src="/icons/folder.png" alt="" style={{width:24,height:24}}/>
            </div>
            <div className={styles.info}>
                <p className={styles.name}>{profile.title}</p>
                <p className={styles.handle}>{profile.content}</p>
            </div>
            <div className={styles.action} aria-hidden>
                <span style={{fontSize: '1.2rem', fontWeight:700}}>›</span>
            </div>
        </div>
    );
}