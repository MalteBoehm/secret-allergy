import React, { useContext, useEffect, useState } from "react";

import { getLiveSearchData } from "../service/LiveSearchService";
import { LiveSearchContext } from "./LiveSearchContext";
import SearchInputContext from "./SearchInputContext";
import AuthContext from "./AuthContext";


export default function LiveSearchProvider({ children }) {

  const [liveSearchData, setLiveSearchData] = useState([]);

  const [addMealListOfProducts, setAddMealListOfProducts] = useState([]);
  const { token } = useContext(AuthContext);
  const { searchInput } = useContext(SearchInputContext);

  useEffect(() => {
    searchInput.length > 3 ?
      getLiveSearchData(searchInput, token).then(setLiveSearchData).catch(console.log)
      : "";
  }, [searchInput]);

  return (<LiveSearchContext.Provider value={{ liveSearchData, addMealListOfProducts, setAddMealListOfProducts }}
                                      children={children} />);
}
