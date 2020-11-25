import React, {useEffect, useState} from "react";

import {getLiveSearchData} from "../service/LiveSearchService";
import LiveSearchContext from "./LiveSearchContext";


export default function LiveSearchProvider({children}){
    const [liveSearchData, setLiveSearchData] = useState([]);
    useEffect(()=> {
        getLiveSearchData().then(setLiveSearchData).catch(console.log)
    },[])
    return (<LiveSearchContext.Provider value={{liveSearchData}} children={children}/>);
}


