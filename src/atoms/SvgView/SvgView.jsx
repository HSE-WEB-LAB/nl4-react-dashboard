import {useEffect, useRef} from "react";


export const SvgView = ({svgUrl, className}) => {

    const svgContainer = useRef()

    console.log(svgUrl)

    useEffect(() => {
        fetch(svgUrl).then(async (data) => {
            const svg = await data.text();
            const svgDom = (new DOMParser()).parseFromString(svg, 'text/html')
            className.split(' ').forEach((classN) => {
                svgDom.body.children[0].classList.add(classN)
            })
            svgContainer.current.appendChild(svgDom.body.children[0])
        })
    }, [])

    return(
        <div
            ref={svgContainer}
            className={className}
        >
        </div>
    )
}