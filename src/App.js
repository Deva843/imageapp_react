// import logo from './logo.svg';
import './App.css';
import ImageSearch from "./components/ImageSearch";
import ImageList from './components/ImageList';
import { useState } from 'react';

function App() {
  const [imageList,setImageList]=useState([])
  return (
    <div className="App">
      <ImageSearch setImageList={setImageList}/>
      <ImageList imageList={imageList}/>
      
    </div>
  );
}

export default App;
