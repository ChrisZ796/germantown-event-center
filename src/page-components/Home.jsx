import Sidebar from "./sidebar/Sidebar";
import Feed from "./Feed";
import Favorites from "./Favorites";
import Footer from "./Footer";
import { useState } from "react";

export default function Home({onSelect, selectedSection}) {

  return (
    <div className='container'>
      <Sidebar onSelect = {onSelect} selectedSection = {selectedSection}/>
      <div className = 'feed'><Feed /></div>
      <div className = 'favorites'><Favorites /></div>
      <div className='footer'><Footer /></div>
    </div>
  );
}