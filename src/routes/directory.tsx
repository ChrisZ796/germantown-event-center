
import Sidebar from "../page-components/sidebar/Sidebar.js";
import Favorites from "../page-components/favorites/Favorites.js";
import styles from "./directory.module.css";
import { useState, useEffect } from "react";
import {createFileRoute} from "@tanstack/react-router"
import { instance } from "../services/api.js";
import { Card } from "../page-components/card/Card.js";

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
        {directoryData.length > 0 && directoryData.map((item: any) => (
          <Card image={"/icons/account.png"} name={item.firstname} username={item.username} isOrg={false}/>
        ))}
        </div>
      <Favorites />
    </div>
  );
}