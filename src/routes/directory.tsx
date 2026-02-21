
import Sidebar from "../page-components/sidebar/Sidebar.js";
import Favorites from "../page-components/favorites/Favorites.js";
import styles from "./directory.module.css";
import { useState, useEffect } from "react";
import {createFileRoute} from "@tanstack/react-router"
import { instance } from "../services/api.js";
import { Card } from "../page-components/card/Card.js";
import { FaMagnifyingGlass, FaFilter } from "react-icons/fa6";

export const Route = createFileRoute('/directory')({
  component: Directory
});

function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [directoryData, setDirectoryData] = useState<any>([]);
  useEffect(() => {
    loadDirectory();
  }, []);
  async function loadDirectory() {
    const response = await instance.get('/directory');
    const data = [response.data.users, response.data.organizations].flat();
    setDirectoryData(data);

  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  function handleSearch(searchTerm: string) {
    setSearchTerm(searchTerm);
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.directory}>
        <header className={styles.header}>
          <div className={styles.searchBar}>
            <input
              className={styles.searchInput}
              type='text'
              placeholder='Search for an account or organization...'
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button className={styles.searchButton} onClick={() => handleSearch(searchTerm)} ><FaMagnifyingGlass size={48} /></button>
          </div>
          <button className={styles.filterButton}><FaFilter size={48}/></button>
        </header>
        <main className={styles.main}>
          {directoryData.length > 0 && directoryData.map((item: any) => (
            <Card name={item.firstname || item.orgName} username={item.username} isOrg={!!item.orgName}/>
          ))}
        </main>
      </div>
      <Favorites />
    </div>
  );
}