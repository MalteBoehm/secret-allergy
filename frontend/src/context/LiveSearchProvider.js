import React, {useContext, useEffect, useState} from "react";

import {getLiveSearchData} from "../service/LiveSearchService";
import {LiveSearchContext} from "./LiveSearchContext";
import SearchInputContext from "./SearchInputContext";


export default function LiveSearchProvider({children}){
    const [liveSearchData, setLiveSearchData] = useState([]);

    const {searchInput} = useContext(SearchInputContext);
    useEffect(()=> {
        searchInput.length > 3 ?
            getLiveSearchData(searchInput).then(setLiveSearchData).catch(console.log)
            : ""
    }, [searchInput])

    return (<LiveSearchContext.Provider value={{liveSearchData}} children={children}/>);
}
