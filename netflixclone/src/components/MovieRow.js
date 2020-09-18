import React, { useState } from 'react';
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, items }) => {

    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth/2);

        console.log(scrollX);

        if (scrollX === 0){
            let listWidth = items.results.length * 150;
            x = (window.innerWidth - listWidth) + 60; 
        }
        else if (x > 0){
            x = 0;
        }
        console.log(x);
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2);
        let listWidth = items.results.length * 150;

        if( scrollX === (window.innerWidth - listWidth) + 60){
            x = 0;
        }
        else if ((window.innerWidth - listWidth) > x){
            x = (window.innerWidth - listWidth) + 60;
        }
        
        setScrollX(x);
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            { item.poster_path &&
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.title}`} />
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}