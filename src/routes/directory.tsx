
import Sidebar from "../page-components/sidebar/Sidebar.js";
import Favorites from "../page-components/favorites/Favorites.js";
import styles from "./directory.module.css";
import { useState } from "react";
import {createFileRoute} from "@tanstack/react-router"

export const Route = createFileRoute('/directory')({
  component: Directory
});

function Directory() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  function handleSearch(searchTerm: string) {
    setSearchTerm(searchTerm);
  }

  return (
    <div className='container'>
      <Sidebar />
      <div className={styles.directory}>
        <h2 className={styles.titleCenter}>Directory</h2>

        <div className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder='Search for Profiles/Events...'
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button aria-label='Search' style={{borderRadius: '999px', padding: '.5rem'}}>
          </button>
        </div>
        </div>
      <Favorites />
    </div>
  );
}