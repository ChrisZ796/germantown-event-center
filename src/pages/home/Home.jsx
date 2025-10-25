import Sidebar from "../../page-components/sidebar/Sidebar";
import Feed from "../../page-components/feed/Feed";
import Favorites from "../../page-components/favorites/Favorites";
import Footer from "../../page-components/Footer";

export default function Home({onSelect, selectedSection}) {

  return (
    <div className='container'>
      <Sidebar onSelect={onSelect} selectedSection={selectedSection} className="sidebar"/>
      <Feed className="feed"/>
      <Favorites className="favorites"/>
      <Footer className="footer"/>
    </div>
  );
}