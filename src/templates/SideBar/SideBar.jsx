import asd from '../../atoms/Svg/dummy logo.svg'
import {NavTitle} from "../../molecules/NavTitle/NavTitle";
import {SideBarButtons} from "../../molecules/SideBarButtons/SideBarButtons";


export const SideBar = () => {
    const navData = [
        {
            text: 'Dashboard',
            url: '/'
        },
        {
            text: 'Leaderboard',
            url: '/leaderboard'
        },
        {
            text: 'Order',
            url: '/order'
        },
        {
            text: 'Products',
            url: '/products'
        },
        {
            text: 'Sales Report',
            url: '/sales-report'
        },
    ]

    return(
        <div className="sidebar">
            <NavTitle
                titleText="Dabang"
                svgIcon={asd}
            />
            <SideBarButtons
                navData={navData}
            />
        </div>
    )
}