
const Images = (props) => {
    return (
      <div>
         <img src={props.newImage} onChange={(e) => props.setNewImage(e.target.value)}/>
         {props.images.map((image, index) => (
        <div key={index}  className="image-container">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
        ))}
      </div>
    )
 }
 
    
 
   export default Images;