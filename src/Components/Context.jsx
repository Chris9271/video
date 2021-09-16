import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HTML from './YoutubeData/html';

const Context = React.createContext();

const ContextProvider = (props) => {
    const [defaultVideo, setDefaultVideo] = useState([]);
    const [query, setQuery] = useState("html5");

    // const fetchVideo = async() => {
    //     try{
    //         // const videoData = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&order=viewCount&key=${process.env.REACT_APP_API_KEY}`)
    //         const videoData = await fetch(HTML).then((res) => console.log(res));
    //         console.log(videoData.data)
    //         // console.log(HTML)
    //         setDefaultVideo(videoData.data.items);
    //         console.log(defaultVideo)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    const updateQuery = (val) => {
        setQuery(val)
    }

    useEffect(() => {
        setDefaultVideo(HTML.data.items)
        console.log(HTML.data.items)
    },[query])

    return (
        <Context.Provider value={{defaultVideo, updateQuery}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider};
