
/*
1.search for youtube api auth
2.go to credentials page login , create a new project there and go again go to credentials page now you can  get api key
*/
const GOOGLE_API_KEY = "AIzaSyBk2yHQK2x3KmTDJFaDCoMqdcDNEHMJoOM";

export const OFFSET_LIVE_CHAT = 20;


/*
1. search for youtube video api
2.go to most popular video and get api and add maxResults=50&
*/
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;



// search for youtube search suggestion api
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


// http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query