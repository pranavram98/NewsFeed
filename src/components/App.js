import React from 'react';
import './Segment.css';
import SearchBar from './SearchBar'
import logo from '../images/logo192.png';
import news, { baseParams } from '../api/news';
import ArticleList from './ArticleList';
import axios from 'axios';
import Scroller from './Scroller';
import ArticleDetail from './ArticleDetail';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const key="456d74d5713b496bb02096f331654d08";

class App extends React.Component{
    state={articles:[],selectedArticle:null,scrolls:[]}
    
    onTermSubmit= async (term)=>{
        const x=  await news.get('/everything',{
          params:{
              ...baseParams,
              qinTitle: term,
              pageSize:6
          }
               });
               this.setState({articles:x.data.articles});
               this.setState({selectedArticle:x.data.articles[0]});
            };
componentDidMount() { /* using this for getting top headlines to scroll on the page*/ 
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`,{params:{pageSize:6}}).then(response=>{
    this.setState({scrolls:response.data.articles});
    this.setState({articles:response.data.articles});
    this.setState({selectedArticle:response.data.articles[0]});
          });
}
            selectedArticle=(article)=>{
                this.setState({selectedArticle:article});
            };

            refreshPage(){ 
                window.location.reload(); 
            };
    render(){
        return(
<div id="boss">  
<div className="ui inverted segment">
        <div className="ui grid">
            <div className="ui row">

            <div className="three wide column">
                    <h1 className="ui header" id="heading" onClick={this.refreshPage}>NEWS</h1>
                    </div>

                    <div className="ten wide column">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    </div>

                <div className="two wide column">
                    <img id="logo" src={logo} alt=""></img>
                </div>    
            </div>
  <div className="ui active inverted placeholder">
  
    </div>
  </div>
  </div>
  <div><Scroller scrolls={this.state.scrolls}/></div>
  <br/>
  <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
                <div><ArticleDetail article={this.state.selectedArticle}/></div></div>
<div className="five wide column">
  <div><ArticleList selectedArticle={this.selectedArticle} articles={this.state.articles}/></div>
  </div></div></div>
  </div>      
 
        );
    };
};

export default App;