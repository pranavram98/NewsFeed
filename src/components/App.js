import React from 'react';
import './Segment.css';
import SearchBar from './SearchBar'
import logo from '../images/logo192.png';
import news, { baseParams } from '../api/news';
import ArticleList from './ArticleList';
import axios from 'axios';
import Scroller from './Scroller';
const key="456d74d5713b496bb02096f331654d08";



class App extends React.Component{
    state={articles:[],selectedArticle:null,scrolls:[]}
    
    onTermSubmit= async (term)=>{
        const x=  await news.get('/everything',{
          params:{
              ...baseParams,
              qinTitle: term,
              pageSize:10
          }
               });
               this.setState({articles:x.data.articles});
               console.log(this.state.articles);
            };
componentDidMount() { /* using this for getting top headlines to scroll on the page*/ 
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`).then(response=>{
    this.setState({scrolls:response.data.articles})
    console.log(this.state.scrolls);
        
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
<div>  
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
  <div><ArticleList selectedArticle={this.selectedArticle} articles={this.state.articles}/></div>
  </div>    
 
        );
    };
};

export default App;