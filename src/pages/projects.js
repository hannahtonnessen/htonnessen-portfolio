import Sunset from '../assets/images/test-image.jpg';
import {useRef, useState } from 'react';
import './projects.css';
import Images from './images';
const Projects = () => {

  const [images, setImages] = useState([Sunset, Sunset]);
  const [newImage, setNewImage] = useState(Sunset); 
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  }
  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    setNewImage(fileObj.name);
    setImages([...images, newImage]);
    setNewImage(''); 


    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  }
  
  return (
    <>
    These are my projects
    <button onClick={handleClick}>Add +</button>
    <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
       <div className="images-container">
      </div>
      <Images images={images} setImages={setImages} setNewImage={setNewImage} newImage={newImage} />
       {/* <input
          type="text"
          placeholder="Image URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        /> */}

    </>
  )
}
  
 

  export default Projects;