import Sidebar from "../../page-components/sidebar/Sidebar";
import Favorites from "../../page-components/favorites/Favorites";
import Footer from "../../page-components/Footer";

export default function Updates({onSelect, selectedSection}) {
  return (
    <div className='container'>
      <Sidebar onSelect={onSelect} selectedSection = {selectedSection}/>
      <h1>Updates</h1>
      <Favorites />
      <Footer />
    </div>
  );
}