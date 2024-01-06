import {SingleBar} from "../../atoms/SingleBar/SingleBar";


export const ChartBars = ({data, maxValue}) => {
    console.log(data)

    return(
        <div className="chartBars">
            {data.map((value, index) => {
                return <SingleBar
                    key={index}
                    value={value.value}
                    maxValue={maxValue}
                />
            })}
        </div>
    )
}