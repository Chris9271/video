import React, {useContext} from 'react';
import Header from './Components/Header/Header';
import Video from './Components/Videos';
import {Context} from './Components/Context';
import './App.css';

const App = () => {
  const contextData = useContext(Context);
  const {defaultVideo, updateQuery} = contextData;
  console.log(defaultVideo)
  return (
    <div className="App">
      <Header updateVideo={updateQuery}/>
      <Video videos={defaultVideo}/>
    </div>
  );
}

export default App;
