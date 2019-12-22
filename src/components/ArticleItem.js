import React from 'react';

const ArticleItem=({article,selectedArticle})=>{
return(
<div className="item" onClick={()=>selectedArticle(article)}>
<img className="ui avatar image" src={article.urlToImage} alt=""/>
<br></br><br></br>
<div className="content">
<a class="header">{article.author}</a>
<div class="description">{article.title}</div>
</div>
</div>
);
};
export default ArticleItem;