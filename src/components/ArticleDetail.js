import React from 'react';
import './Segment.css'
const ArticleDetail=({article})=>{
    if(!article){
        return(
            <div>
            <br></br>
<div className="ui active centered inline loader"></div>
</div>
);
    }
return(
<div>  
<div className="ui inverted segment">
<h2 className="ui header" id="articletitle">{article.title}</h2>
<h3 className="ui header" id="article">{article.description}</h3>
<h5 className="ui header" id="author">- {article.author}</h5>
<div className="ui divider"></div>
<img className="ui large image" src={article.urlToImage} alt="" id="detailimg"/><br/>
<p id="article">{article.content}</p>
</div>
 </div>
    );

};
export default ArticleDetail;