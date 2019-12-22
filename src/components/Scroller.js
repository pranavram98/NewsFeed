import React from 'react';
import Newsticker from 'react-newsticker';

const Scroller=({scrolls})=>{
    const list=scrolls.map((scroll=>{
        return(
        <div>{scroll.title}
                         </div>
    );
    }));
return (
                    <div><Newsticker news={list}/>
                    </div>
);
};
export default Scroller;