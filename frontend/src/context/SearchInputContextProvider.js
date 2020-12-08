import React, { useState } from "react";
import SearchInputContext from "./SearchInputContext";


export default function SearchInputProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");
  return (<SearchInputContext.Provider value={{ searchInput, setSearchInput }} children={children} />);
}
