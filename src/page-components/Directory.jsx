
import Sidebar from "./sidebar/Sidebar";
import Favorites from "./Favorites";
import Footer from "./Footer";
import ViewProfile from "./ViewProfile";
import { useState, useRef, useEffect } from "react";


export default function Directory({ onSelect, selectedSection, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const [profiles, setProfiles] = useState([
      { id: 1, title: "First Name 1", content: "@username" },
      { id: 2, title: "First Name 2", content: "@username" },
      { id: 3, title: "First Name 3", content: "@username" },
      { id: 4, title: "First Name 4", content: "@username" },
      { id: 5, title: "First Name 5", content: "@username" }
  ])
  const contentRef = useRef(null);

  useEffect(() => {
      const handleScroll = () => {
          const el = contentRef.current;
          if (!el) return;
          if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
              setProfiles(prev => {
                  const newProfiles = [
                      ...prev,
                      { id: prev.length + 1, title: `First Name ${prev.length + 1}`, content: `@username` }
                  ];
                  return newProfiles;
              });
          }
      };
      const el = contentRef.current;
      if (el) el.addEventListener('scroll', handleScroll);
      return () => {
          if (el) el.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className='container'>
      <Sidebar onSelect={onSelect} selectedSection={selectedSection} />
      <div className='directory'>
        <h2 style = {{ marginLeft:'47%' }}>Directory</h2>
        <div className='searchBarContainer'>
          <input
            type='text'
            placeholder='Search for Profiles/Events...'
            value={searchTerm}
            onChange={handleInputChange}
            className='searchInput'
            style = {{ marginBottom:'2%', marginLeft:'20%', width: '60%', height: '40%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
          <button onClick={handleSearchClick} className='searchButton' style = {{ marginLeft:'1%', borderRadius: '50%', position:'relative', top:'10px'}}>
            <img src = "/icons/search.png" alt = "searchbutton" width = "30" height = "30" style = {{ padding: 5}} ></img>
          </button>
        </div>
        <div>
            <div ref={contentRef} style={{height: '85vh', overflowY: 'auto'}}>
                {profiles.map(profile => (
                    <ViewProfile profile={profile} key={profile.id} />
                ))}
            </div>
        </div>
      </div>
      <div className='favorites'><Favorites /></div>
      <div className='footer'><Footer /></div>
    </div>
  );
}