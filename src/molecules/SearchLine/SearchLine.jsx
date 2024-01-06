import {useState} from "react";
import {SvgView} from "../../atoms/SvgView/SvgView";


export const SearchLine = ({modelValue, updateValue = () => {}}) => {

    const [inputPadding, setInputPadding] = useState(true)

    return(
        <div className="searchLineContainer">
            {inputPadding && <SvgView
                    svgUrl="magnifying"
                    className="magnifying magnifyingContainer"
                />
            }

            <input
                type="text"
                onInput={updateValue}
                value={modelValue}
                onFocus={() => setInputPadding(false)}
                onBlur={(e) => {
                    if(e.target.value){
                        setInputPadding(false)
                        return;
                    }
                    setInputPadding(true)
                }}
                placeholder="Search here..."
                style={{paddingLeft: `${inputPadding ? 55 : 10}px`}}
            />
        </div>
    )
}