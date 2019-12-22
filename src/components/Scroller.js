import React from 'react';
import Newsticker from 'react-newsticker';
import './Segment.css';

const Scroller=({scrolls})=>{
    const list=scrolls.map((scroll=>{
        return(
        <div>{scroll.title}
                         </div>
    );
    }));
return (            <div className="ui container">
                    <div id="news"><Newsticker news={list}/>
                    </div>
                    </div>
);
};
export default Scroller;