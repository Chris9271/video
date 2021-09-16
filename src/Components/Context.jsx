import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import HTML5 from './YoutubeData/html';
import CSS3 from './YoutubeData/css';
import JavaScript from './YoutubeData/javascript';
import ReactJS from './YoutubeData/react';
import Learn from './YoutubeData/learn';
import StudyMusic from './YoutubeData/study';

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

    const checkDefault = (target) => {
        console.log('target', target)
        const val = document.querySelector('li[data-value]')
        const value = document.querySelector('li[data-value]').innerHTML;
        // console.log(value)
        if(value === "HTML"){
            val.classList.add('changeColor')
        }else if(value !== "HTML"){
            val.classList.remove('changeColor')
        }
    }

    useEffect(() => {
        // const val = document.querySelector('li[data-value]')
        // const value = document.querySelector('li[data-value]').innerHTML;
        // console.log(value)
        // if(value === "HTML"){
        //     val.classList.add('changeColor')
        // }else{
        //     val.classList.remove('changeColor')
        // }
        checkDefault();
        const clicked = document.querySelector('.nav-underline');
        clicked.classList.add('underline1');
        switch(query){
            case "html5":
                setDefaultVideo(HTML5.data.items)
                break;
            case "css3":
                setDefaultVideo(CSS3.data.items)
                break;
            case "javascript":
                setDefaultVideo(JavaScript.data.items)
                break;
            case "react js":
                setDefaultVideo(ReactJS.data.items)
                break;
            case "how to learn programming":
                setDefaultVideo(Learn.data.items)
                break;
            case "study music":
                setDefaultVideo(StudyMusic.data.items)
                break;
            default:
                break;
        }
    },[query])

    return (
        <Context.Provider value={{defaultVideo, updateQuery, checkDefault}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider};
