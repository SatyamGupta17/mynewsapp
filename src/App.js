
import './App.css';
import { Component } from 'react';
import NavBar from './components/Navbar';
import News from './components/News'; 
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
  } from "react-router-dom";
export default class App extends Component{
  // apiKey = process.env.REACT_NEWS_APP_API
  apiKey = '450fa29ccbcd4833bbf82be4f1d8865b'
  pageSize = 5
  setProgress = (progress) =>{
    this.setState({progress : progress})
  }
  state = {
    progress : 0
  }
  render(){
    return(
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        color = '#f11946'
        height = {3}
        progress = {this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path = "/" element = {<News setProgress = {this.setProgress}  key = "general"  pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "general"/>}/>
          <Route exact path = "/business" element = {<News setProgress = {this.setProgress}  key = "business" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "business"/>}/>
          <Route exact path = "/entertainment" element = {<News setProgress = {this.setProgress}  key = "entertainment" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "entertainment"/>}/>
          <Route exact path = "/general" element = {<News setProgress = {this.setProgress}  key = "general" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "general"/>}/>
          <Route exact path = "/health" element = {<News setProgress = {this.setProgress}  key = "health" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "health"/>}/>
          <Route exact path = "/science" element = {<News setProgress = {this.setProgress}  key = "science" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "science"/>}/>
          <Route exact path = "/sports" element = {<News setProgress = {this.setProgress}  key = "sports" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "sports"/>}/>
          <Route exact path = "/technology" element = {<News setProgress = {this.setProgress}  key = "technology"  pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "technology"/>}/>
        </Routes>    
      </Router>
      </div>
    )
  }
}