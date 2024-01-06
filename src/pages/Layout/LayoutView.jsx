import {TopBar} from "../../templates/TopBar/TopBar";
import {SideBar} from "../../templates/SideBar/SideBar";
import {Outlet} from "react-router-dom";


export const LayoutView = () => {


    return(
        <div className="layout">
            <TopBar/>
            <SideBar/>
            <div className="layoutWrapper">
                <Outlet/>
            </div>

        </div>
    )
}