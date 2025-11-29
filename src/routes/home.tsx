import Sidebar from "../page-components/sidebar/Sidebar.js";
import Feed from "../page-components/feed/Feed.js";
import Favorites from "../page-components/favorites/Favorites.js";
import styles from './home.module.css';
import {createFileRoute} from "@tanstack/react-router"

export const Route = createFileRoute('/home')({
  component: Home
});

function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Feed />
      <Favorites />
    </div>
  );
}