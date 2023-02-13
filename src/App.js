import './App.css';
import Nav from './Components/Nav/Nav';
import { useState } from 'react';
import SongList from './Components/SongList/SongList';
import SongCard from './Components/SongCard/SongCard'


function App() {
  const[Songs , SetSongs] =  useState([
    {
      name : "Rimi Openning song ",
      img : "https://i.ytimg.com/vi/AtxrTdgVmOI/hqdefault.jpg ",
      genre: " mp4 ",
    },

    {
      name : " Saturday Morning Acapell ",
      img : "https://e7.pngegg.com/pngimages/476/761/png-clipart-hamtaro-rainbow-rescue-hamtaro-ham-hams-unite-hamtaro-ham-ham-heartbreak-youtube-youtube-child-food.png",
      genre :  "mp4",

     },

     {name : "The Lion King - Circle of Life   ",
     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVqiP0APCTq1VDs4TwfMRPqZneBrjeEcKLgbUFvkbooZwgU_f78U2MZ24Bn_OFd_YoVQ&usqp=CAU ",
     genre : " mp4 ",

     },


  ]);
  return (
    <div className="App">
    <Nav/>
  
    < SongList  songs ={Songs} />
    

      
    </div>
  );
}

export default App;
