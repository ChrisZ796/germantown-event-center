import Sidebar from "@page-components/sidebar/Sidebar.tsx";
import Favorites from "@page-components/favorites/Favorites.tsx";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router"
import { instance } from "../../services/api.ts";
import { Card } from "@page-components/card/Card.tsx";
import { FaMagnifyingGlass, FaFilter } from "react-icons/fa6";

export const Route = createFileRoute('/directory/')({
  component: Directory
});

interface DirectoryData {
  userID: number;
  orgID: number;
  username: string;
  orgName: string;
  firstname: string;
}

function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [directoryData, setDirectoryData] = useState<DirectoryData[]>([]);
  useEffect(() => {
    loadDirectory();
  }, []);

  async function loadDirectory() {
    try {
      const response = await instance.get('/directory');
      const data = [response.data.users, response.data.organizations].flat();
      setDirectoryData(data);
    }
    catch (error) {
      return new Error('Failed to load directory', error instanceof Error ? error : undefined);
    }
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
          {directoryData.length > 0 && directoryData.map((item: DirectoryData) => (
            <Card key={item.userID || item.orgID} directoryID={item.userID || item.orgID} name={item.firstname || item.orgName} username={item.username} isOrg={!!item.orgName}/>
          ))}
        </main>
      </div>
      <Favorites />
    </div>
  );
}