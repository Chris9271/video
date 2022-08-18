import React, {useContext} from 'react';
import Header from './Components/Header';
import Video from './Components/Video';
import {Context} from './Components/Context';
import './App.scss';

const App = () => {
  const contextData = useContext(Context);
  const {defaultVideo, updateQuery} = contextData;

  return (
    <div className="App">
      <Header updateQuery={updateQuery}/>
      <Video videos={defaultVideo}/>
      <p className="e-copy">&copy; CodeTube All rights reserved.</p>
    </div>
  );
}

export default App;
