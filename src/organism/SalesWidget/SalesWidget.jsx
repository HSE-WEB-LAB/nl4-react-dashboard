import {WidgetCard} from "../../molecules/WidgetCard/WidgetCard";


export const SalesWidget = ({data}) => {

    console.log(data)

    return(
        <div className="salesWidget">
            <p className="chartTitle">
                Today’s Sales
            </p>
            <div className="widgetsContainer">
                {data.map((widget, index) => {
                    return <WidgetCard
                        key={index}
                        data={widget}
                    />
                })}
            </div>
        </div>
    )
}