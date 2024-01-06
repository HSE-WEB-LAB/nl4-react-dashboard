import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";
import {LayoutView} from "../Layout/LayoutView";


export const AppRouter = () => {
    return(
        <Routes>
            <Route path={'/'} element={<LayoutView />} >
                {publicRoutes.map(({path, Element}) => {
                    return <Route key={path} path={path} element={Element} />
                })}

                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    )
}