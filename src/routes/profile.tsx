import Sidebar from "../page-components/sidebar/Sidebar.js";
import Favorites from "../page-components/favorites/Favorites.js";
import {createFileRoute} from "@tanstack/react-router"

export const Route = createFileRoute('/profile')({
  component: Profile
});

function Profile() {

  return (
    <div className='container'>
      <Sidebar/>
      <div className = 'directory'>Profile</div>
      <div className = 'favorites'><Favorites /></div>
    </div>
  );
}