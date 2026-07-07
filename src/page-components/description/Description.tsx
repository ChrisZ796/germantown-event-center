import styles from './description.module.css';
import { EventCard } from '../event-card/EventCard.tsx';

export function Description() {
    return (
        <>
            <article className={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                <section>
                    <div className={styles.orgDetails}>
                        <strong>Website:</strong>
                        <p>www.organizationwebsite.com</p>
                    </div>
                    <div className={styles.orgDetails}>
                        <strong>Email:</strong>
                        <p>organizationemail@email.com</p>
                    </div>
                    <div className={styles.orgDetails}>
                        <strong>Office:</strong>
                        <p>123 Seasame Street, TN</p>
                    </div>
                </section>
            </article>
            <article className={styles.eventsHosted}>
                <h2>Events Hosted</h2>
                <EventCard />
                <EventCard />
                <EventCard />                
            </article>
        </>
    );
}