import {useState} from "react";
import {Customtitle} from "../../atoms/CustomTitle/Customtitle";
import {SearchLine} from "../../molecules/SearchLine/SearchLine";


export const TopBar = () => {

    const [searchString, setSearchString] = useState('')

    return(
        <div className="topBar">
            <Customtitle>
                DASHBOARD
            </Customtitle>
            <SearchLine modelValue={searchString} updateValue={(e) => setSearchString(e.target.value)}/>
        </div>
    )
}