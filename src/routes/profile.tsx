import Sidebar from "@page-components/sidebar/Sidebar.js";
import Favorites from "@page-components/favorites/Favorites.js";
import {createFileRoute} from "@tanstack/react-router"
import styles from "./profile.module.css";
import { Container } from "@page-components/container/Container.tsx";
import { Header } from "@page-components/header/Header.tsx";

export const Route = createFileRoute('/profile')({
  component: Profile
});

function Profile() {

  return (
    <div className={styles.container}>
      <Sidebar/>
      <Container className={styles.profileContainer}>
        <section className={styles.content}>
          <Header />
        </section>
      </Container>
      <Favorites />
    </div>
  );
}