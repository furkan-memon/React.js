import axios from 'axios'
const UNSPLASH_KAY=import.meta.env.VITE_UNSPLASH_KAY
const PEXELS_KAY=import.meta.env.VITE_PEXELS_KAY

export async  function  fetchPhotos(query,page=1,par_page=20){
 const  res = await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,par_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KAY}`}
 })
return res.data
}

export async  function  fetchVideos(query,par_page=15){
 const  res = await axios.get("https://api.pexels.com/v1/videos/search",{
    params:{query,par_page},
    headers:{Authorization:PEXELS_KAY}
 })
return res.data
}
