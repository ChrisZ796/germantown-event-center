import Sidebar from "./sidebar/Sidebar";
import Favorites from "./Favorites";
import Footer from "./Footer";
import { useState } from "react";

export default function Updates({onSelect, selectedSection}) {

  return (
    <div className='container'>
      <Sidebar onSelect={onSelect} selectedSection = {selectedSection}/>
      <div className = 'directory'>Updates</div>
      <div className = 'favorites'><Favorites /></div>
      <div className='footer'><Footer /></div>
    </div>
  );
}