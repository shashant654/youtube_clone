import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

function Head() {

  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions , setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {

const timer = setTimeout(() => {

  if(searchCache[searchQuery]) {
    setSuggestions(searchCache[searchQuery]);
  } else {
    getSearchSuggestions();
  }
   } ,200);

return () => {
  clearTimeout(timer)
};

  }, [searchQuery])

 
  const getSearchSuggestions = async () => {
    console.log("API call -" + searchQuery);
    // http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json); 
    setSuggestions(json[1])
    // update cache
    dispatch(cacheResults({
      [searchQuery] : json[1],
      // iphone : [1,3,4,]  => here iphone is like a queryString
    }))
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // api call 
// console.log(searchQuery);
// make an api call after every key press
// but if the difference between 2 key strokes is < 200ms then decline the api call


   /* DEBOUNCING :-----

  - when we press i :-
  =>render the component => useEffect() => start timer => make api call after 200ms

   - after i when we press p : ip
   => destroy the previous timer => re-render the component => useEffect() => start timer => make api call after 200ms
  */

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg items-center">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
          alt="menu"
        />

        <a href="/">
          <img
            className="h-16 ml-3 "
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="youtube-logo"
          />
        </a>
        
      </div>
      <div className="col-span-10">
        <div>
        <input
          className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />

        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        </div>

       {showSuggestions && (
        <div className="absolute bg-white py-2 px-5 w-[28.5rem] shadow-lg rounded-lg border border-gray-300">
          <ul>
           {suggestions.map((s) => (
             <li key={s} className="hover:bg-gray-100 py-2">🔍  {s}</li>
           ))}
            
          </ul>
        </div>
        )}
       
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
}

export default Head;

/*
  ******* (
    if we press i 
    if we press ip
    if we press iphon
    if we press again ip then => ip k liye apready cache me api store hai that's why same api suggest kr dega
  )

const timer = setTimeout(() => {
  if(cache) {
    setSuggestions(json[1]);
  } else {
    getSearchSuggestions();
  }
  
   } ,200);
 */


// <div className="fixed bg-white py-2 px-5 w-[28.5rem] shadow-lg rounded-lg border border-gray-300">

//  <ul>
//  <li className="hover:bg-gray-100 py-2">🔍  Iphone 11</li>  
//     <li className="hover:bg-gray-100 py-2">🔍  Iphone 12</li>
//  <li className="hover:bg-gray-100 py-2">🔍  Iphone 13</li>
//   <li className="hover:bg-gray-100 py-2">🔍  Iphone 14</li>
//   <li className="hover:bg-gray-100 py-2">🔍  Iphone 14 Pro max</li>
//   <li className="hover:bg-gray-100 py-2">🔍  Iphone 12 Pro max</li>
//   <li className="hover:bg-gray-100 py-2">🔍  Iphone 14 Plus</li>
//   <li className="hover:bg-gray-100 py-2">🔍  Iphone 13 Pro</li>
//   </ul>
//  </div>