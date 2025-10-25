import Sidebar from "../../page-components/sidebar/Sidebar";
import Favorites from "../../page-components/favorites/Favorites";
import Footer from "../../page-components/Footer";

export default function Profile({onSelect, selectedSection}) {

  return (
    <div className='container'>
      <Sidebar onSelect={onSelect} selectedSection = {selectedSection}/>
      <div className = 'directory'>Profile</div>
      <div className = 'favorites'><Favorites /></div>
      <div className='footer'><Footer /></div>
    </div>
  );
}