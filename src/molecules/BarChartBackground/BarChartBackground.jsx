

export const BarChartBackground = ({backgroundShards}) => {


    return(
        <div className="barchartBackground">
            {backgroundShards.forEach((value) => {
                return<div
                    key={value}
                >
                    {value}
                    <span></span>
                </div>
            })}
        </div>
    )
}