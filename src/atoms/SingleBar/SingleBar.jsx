import {useEffect, useRef, useState} from "react";


export const SingleBar = ({value, maxValue}) => {

    const maxHeight = 210;
    const bar = useRef();

    useEffect(() => {
        if(maxValue === 0) return;
        let localTargetHeight = value / maxValue * maxHeight;

        let localHeight = 0;

        const interval = setInterval(() => {
            localHeight += 2;
            if(bar.current) bar.current.style.height = localHeight + 'px';
            console.log(localHeight)
            console.log(localTargetHeight)
            if(localHeight >= localTargetHeight) {
                clearInterval(interval);
                if(bar.current) bar.current.style.height = localTargetHeight + 'px';
            }
        }, 4);
    }, [maxValue])

    return(
        <div className="singleBarContainer">
            <div
                className="singleBar"
                ref={bar}
            >
            </div>
            <div className="tooltip">
                { value }
            </div>
        </div>
    )
}