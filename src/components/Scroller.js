import React from 'react';

const Scroller=({scrolls})=>{
    const list=scrolls.map((scroll=>{
        return(<div className="ui relaxed horizontal list"><div className="item"><div class="content">{scroll.title} |</div></div></div>     
    );
    }));
return (<div className="ui container">
        <div className="ui segment">
            <div ><h4>{list}</h4>
            </div></div></div>
);
};
export default Scroller;