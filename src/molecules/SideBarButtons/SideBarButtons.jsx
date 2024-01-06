import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {NavButton} from "../../atoms/NavButton/NavButton";


export const SideBarButtons = ({navData = []}) => {

    const [currentActive, setCurrentActive] = useState(0)
    const navigate = useNavigate()

    const changeCurrent = (i, url) => {
        setCurrentActive(i);
        navigate(url)
    }

    return(
        <div className="sideBarButtons">
            {navData.map((nav, index) => {
                return <NavButton
                            isActive={currentActive === index}
                            click={() => changeCurrent(index, nav.url)}
                        >
                            {nav.text}
                        </NavButton>
            })}
        </div>
    )
}