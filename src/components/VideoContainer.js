import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard ,{AdVideoCard}from "./VideoCard";
import { Link } from "react-router-dom";

const  VideoContainer = () => {

  const [videos,setVideos] = useState([])

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items)
  };

  return (
  <div className="flex flex-wrap">
    {videos[0] && <AdVideoCard info={videos[0]}/>}
    {videos.map((video) => (
    <Link key={video.id} to={"/watch?v=" + video.id}> <VideoCard  info = {video}/> </Link>
))}
  </div>
  )
};

export default VideoContainer;

//  ******** first of all we should try this one for getting only one video
// <VideoCard info = {videos[0]}/>
// after getting one video we should use map for getting more video


// ***********
// whenever we put link then we should use key in map inside the Link 

// return (
//   <div className="flex flex-wrap">
//     {videos.map((video) => (
//     <Link key={video.id} to={"/watch?v=" + video.id}> <VideoCard  info = {video}/> </Link>
// ))}
//   </div>
//   )


// ***********
// whenever we don't use Link then in map we should use key inside the Component
// return (
//   <div className="flex flex-wrap">
//     {videos.map((video) => (
//      <VideoCard  key={video.id} info = {video}/>
// ))}
//   </div>
//   )