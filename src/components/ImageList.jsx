import React from 'react'
import "./imageList.css"

 const ImageList = ({imageList}) => {
    console.log(imageList);
   //redirect to image page
  function handleClick(ele){
    const link = document.createElement('a');
    link.href=ele.urls.full;
    link.target = "_blank"
    link.click();

  }
  
  return (
    <div className='imageGallary'>
       {/* { imageList && <img src={imageList[0].urls.small_s3} alt="" />} */}
        
       { imageList.map((ele,index) => (
            <img  className="images"src={ele.urls.small_s3} alt={ele.alt_description} 
            onClick={()=>handleClick(ele)}
            />
       ))
        }
    </div>
  )
}
export default ImageList;
