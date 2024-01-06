
import {BarChart} from "../../organism/BarChart/BarChart";
import {dashboardData} from "../../data/index";
import {SalesWidget} from "../../organism/SalesWidget/SalesWidget";

export const DashboardWidgets = () => {
    return(
        <div className="dashboardWidgets">
            <BarChart
                data={dashboardData.barChart.data}
                name={dashboardData.barChart.name}
            />
            <SalesWidget data={dashboardData.todaySalesWidget.data}/>
        </div>
    )
}