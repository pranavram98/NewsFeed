import React from 'react';
import {NewsTicker} from "react-announcement-ticker";

const Scroller=({scrolls})=>{
    const list=scrolls.map((scroll=>{
        return(
        <div>
            <NewsTicker
                        tickerBorderColor="#000000"
                        title={"Top Headlines"}
                        titleBackground={"linear-gradient(147deg, #000000 0%, #04619f 74%)"}
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