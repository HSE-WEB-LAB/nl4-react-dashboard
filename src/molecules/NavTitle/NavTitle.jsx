import {SvgView} from "../../atoms/SvgView/SvgView";

export const NavTitle = ({titleText, svgIcon}) => {

    return(
            <div className="navTitle">
                <SvgView
                    svgUrl={svgIcon}
                    className={"navSvg"}
                />
                <h1>
                    {titleText}
                </h1>
            </div>
        )

}