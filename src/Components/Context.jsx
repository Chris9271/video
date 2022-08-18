import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Context = React.createContext();

const ContextProvider = (props) => {
    const [defaultVideo, setDefaultVideo] = useState([]);
    const [query, setQuery] = useState("html");

    const updateQuery = (val) => {
        setQuery(val)
    }

    useEffect(() => {
        (async() => {
            try{
                const videoData = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&regionCode=US&key=${process.env.REACT_APP_API_KEY}`)
                setDefaultVideo(videoData.data.items);
            }catch(err){
                console.log(err)
            }
        })()
    },[query])

    return (
        <Context.Provider value={{defaultVideo, updateQuery}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider};
