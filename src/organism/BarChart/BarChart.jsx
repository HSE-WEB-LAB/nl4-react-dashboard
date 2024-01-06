import {useEffect, useState} from "react";
import {BarChartBackground} from "../../molecules/BarChartBackground/BarChartBackground";
import {ChartBars} from "../../molecules/ChartBars/ChartBars";


export const BarChart = ({data, name}) => {

    const [backgroundShards, setBackgroundShards] = useState([])
    const [maxValueBar, setMaxValueBar] = useState(0)

    useEffect(() => {
        let maxValue = data[0].value;
        data.forEach(({value}) => {
            if(value > maxValue) maxValue = value;
        })
        if(maxValue < 10){ //опционально
            maxValue = 10;
        }
        else{
            while(maxValue % 10 !== 0){
                maxValue -= 1;
            }
        }
        setMaxValueBar(maxValue);
        shardsGenerator(maxValue)
    }, [])

    const shardsGenerator = (maxValue) => {
        let startValue = maxValue / 4;
        for (let i = 4; i>=0; i--)
            setBackgroundShards([...backgroundShards, startValue * i]);
    };

    return(
        <div className="barChart">
            <p className="chartTitle">
                {name}
            </p>
            <div className="graphContainer">
                <BarChartBackground backgroundShards={backgroundShards} />
                <ChartBars
                    data={data}
                    maxValue={maxValueBar}
                />
            </div>

        </div>
    )
}