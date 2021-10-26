import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App =()=> {
  const pageSize = 6;
  const apikey=process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0);
  
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable Drak Mode')
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#031227';
      setBtnText('Enable Light Mode');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnText('Enable Dark Mode')
    }
  }
    return (
      <div>
        <Router>
        <NavBar mode={mode} toggleMode={toggleMode} btnText={btnText}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Switch>
          <Route exact path="/"><News mode={mode} setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/general"><News mode={mode} setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/business"><News mode={mode} setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News mode={mode} setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News mode={mode} setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health"/></Route>
          <Route exact path="/science"><News mode={mode} setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science"/></Route>
          <Route exact path="/sports"><News mode={mode} setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News mode={mode} setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  
}

export default App;