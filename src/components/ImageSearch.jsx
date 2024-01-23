import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import "./imageSearch.css"

const ImageSearch = ({setImageList}) => {
    const [search,setSearch] = useState('')
    // const [imagelist,setImageList] = useState([])

    //display env file here
    // console.log("env",process.env.REACT_APP_UNSPLASH_ACCESS_KEY)


    //for searching images
    function handleSearch(e){
        setSearch(e.target.value)
    }
    //initial and default value for the first time page loads
    //[] ==> this load only time 
    useEffect(()=>{
        handleSubmit() ;
    },[])


    //api call
    async function handleSubmit(e){
        if(e){
            e.preventDefault();
        }
        const response =  await axios.get("https://api.unsplash.com/search/photos",{
            headers: {
                "Accept-Version": "v1",
                    "Authorization" : `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                    // ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}
            },
            params: {
                    query: search || "groot" ,
                    per_page:12,
            }
        })
        console.log(response.data.results);
        setImageList(response.data.results);
        
        

    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <div className='form'>
            <input type="text" value={search} placeholder='search Image' onChange={handleSearch} />
            <button type="submit">search</button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch