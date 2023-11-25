import { useState } from "react";
import "./App.css";
import Child from "./Child";

function getRandomImage() {
  const imageArray = ["clean", "dead", "demonstrators", "measure"];
  return imageArray[Math.floor(Math.random() * imageArray.length)];
}

function App() {
  const [images, setImages] = useState([]);

  const handleClick = () => {
    setImages([...images, getRandomImage()]);
    //'...images' meaning; Additions are made to the end of the array without emptying the 'images' array.
  };

  const childList = images.map((image, index) => {
    return <Child key={index} imageName={image} />;
  });
  //We called each element 'image'. 'index' must be used in the map function
  // To send the selected images to the child, we need to navigate inside the directory.

  return (
    <div className="App">
      <button className="generateButton" onClick={handleClick}>
        Give me an image
      </button>
      <div className="imageList">{childList}</div>
    </div>
  );
}
export default App;
