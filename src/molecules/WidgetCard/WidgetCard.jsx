import {useEffect, useRef, useState} from "react";
import {SvgView} from "../../atoms/SvgView/SvgView";


export const WidgetCard = ({data}) => {

    const widgetCard = useRef()

    useEffect(() => {
        if(!widgetCard.current) return;
        let localOpacity = 0;
        const interval = setInterval(() => {
            localOpacity += 0.01;
            widgetCard.current.style.opacity = localOpacity
            if(localOpacity >= 1) clearInterval(interval)
        }, 5)
    }, [widgetCard])

    return(
        <div
            className="widgetCard"
            ref={widgetCard}
            style={{backgroundColor: `#${data.color}`}}
        >
            <SvgView
                svgUrl={data.icon}
                className="widgetCardIcon"
            />
            <div className="textContainer">
                <p className="widgetCardValue">
                    { data.value + data.metrics }
                </p>
                <p className="valueName">
                    { data.name }
                </p>
                <p className="additionalInfo">
                    { data.additionalInfo }
                </p>
            </div>
        </div>
    )

}