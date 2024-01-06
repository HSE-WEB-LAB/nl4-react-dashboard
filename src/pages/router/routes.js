import {DASHBOARD_ROUTE} from "./consts";
import {DashboardView} from "../Dashboard/DashboardView";

export const publicRoutes = [
    {
        path: DASHBOARD_ROUTE,
        Element: <DashboardView />
    },
]