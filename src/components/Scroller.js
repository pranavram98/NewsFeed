import React from 'react';
import {NewsTicker} from "react-announcement-ticker";

const Scroller=({scrolls})=>{
    const list=scrolls.map((scroll=>{
        return(
        <div>
            <NewsTicker
                        tickerBorderColor="#000000"
                        title={"Top Headlines"}
                        titleBackground={"linear-gradient(315deg, #000000 0%, #7f8c8d 74%)"}
                        newsList={[
                            {
                                text: scroll.title,
                                link: scroll.url
                            }
                        ]}
                         />
                         </div>
    );
    }));
return (
                    <div>{list}
                    </div>
);
};
export default Scroller;