import React, {useContext} from 'react';
import Header from './Components/Header/Header';
import Video from './Components/SourceVideo/Videos';
import {Context} from './Components/Context';
import './App.css';

const App = () => {
  const contextData = useContext(Context);
  const {defaultVideo, updateQuery, checkDefault} = contextData;

  return (
    <div className="App">
      <Header updateVideo={updateQuery} checkDefault={checkDefault}/>
      <Video videos={defaultVideo}/>
    </div>
  );
}

export default App;
