import Sidebar from "../page-components/sidebar/Sidebar.js";
import Favorites from "../page-components/favorites/Favorites.js";
import {createFileRoute} from "@tanstack/react-router"

export const Route = createFileRoute('/updates')({
  component: Updates
});

function Updates() {
  return (
    <div className='container'>
      <Sidebar />
      <h1>Updates</h1>
      <Favorites />
    </div>
  );
}