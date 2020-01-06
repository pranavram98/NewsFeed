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
    if(!article.author){
        return(
            <div><div className="ui inverted segment">
            <h2 className="ui header" id="articletitle">{article.title}</h2>
            <button className="ui labeled icon button" id="fullscreen">
                <i class="expand icon"></i>
                Open in Full Screen
            </button>
            <h3 className="ui header" id="article">{article.description}</h3>
            <br/>
            <div className="ui grid"><div className="ui row">
            <div className="eleven wide column"><h5 className="ui header" id="date">{article.publishedAt}</h5></div>
            <div className="five wide column"><h5 className="ui header" id="author">{article.author}</h5></div>
            </div>
            </div>
            
            <div className="ui divider"></div>
            <img className="ui large image" src={article.urlToImage} alt="" id="detailimg"/><br/>
            <p id="article">{article.content}</p>
            </div></div>
        );
    }
return(
<div>  
<div className="ui inverted segment">
<h2 className="ui header" id="articletitle" onClick>{article.title}</h2>
<button className="ui labeled icon button" id="fullscreen">
                <i class="expand icon"></i>
                Open in Full Screen
            </button>
<h3 className="ui header" id="article">{article.description}</h3>
<br/>
<div className="ui grid"><div className="ui row">
<div className="eleven wide column"><h5 className="ui header" id="date">{article.publishedAt}</h5></div>
<div className="five wide column"><h5 className="ui header" id="author">- {article.author}</h5></div>
</div>
</div>

<div className="ui divider"></div>
<img className="ui large image" src={article.urlToImage} alt="" id="detailimg"/><br/>
<p id="article">{article.content}</p>
</div>
 </div>
    );

};
export default ArticleDetail;