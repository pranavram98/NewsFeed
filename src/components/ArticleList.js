import React from 'react';
import ArticleItem from './ArticleItem';
import shortid from 'shortid';

const ArticleList=(props)=>{
    const list=props.articles.map((article=>{
        return(
            <div className="ui big vertical divided list">
                <br></br>
                <ArticleItem key={shortid.generate()} article={article} selectedArticle={props.selectedArticle}></ArticleItem>
                    </div>
            
    );
    }));

    return<div>{list}</div>
    
};
export default ArticleList;
