import React from 'react';
import ArticleItem from './ArticleItem';
import { connect } from 'react-redux';
import {fetchArticle} from '../actions'

import shortid from 'shortid';
import './Segment.css';


const ArticleList=(props)=>{
    const list=props.articles.map((article=>{
        return(
            <div key={shortid.generate()}>
                <br/>
                <ArticleItem key={shortid.generate()} article={article} selectedArticle={props.selectedArticle}></ArticleItem>
                    </div>
            
    );
    }));

    return <div><div className="ui inverted segment">
    <div className="ui medium vertical divided list" id="list">{list}</div></div></div>
    
};
export default connect(null,{fetchArticle})(ArticleList)
