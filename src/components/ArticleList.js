import React from 'react';
import ArticleItem from './ArticleItem';
import shortid from 'shortid';
import './Segment.css';


const ArticleList=(props)=>{
    const list=props.articles.map((article=>{
        return(
            <div>
                <br/>
                <ArticleItem key={shortid.generate()} article={article} selectedArticle={props.selectedArticle}></ArticleItem>
                    </div>
            
    );
    }));

    return <div><div class="ui segment">
    <div class="ui medium vertical divided list" id="list">{list}</div></div></div>
    
};
export default ArticleList;
