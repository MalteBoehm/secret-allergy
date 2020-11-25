import 'react-native-gesture-handler';
import * as React from 'react';
import Navigator from "./src/navigation/Navigator";
import LiveSearchProvider from "./src/context/LiveSearchProvider";
import SearchInputContextProvider from "./src/context/SearchInputContextProvider";





export default function App() {
  return (
      <SearchInputContextProvider>
              <LiveSearchProvider>
                    <Navigator/>
              </LiveSearchProvider>
      </SearchInputContextProvider>
        )
      }



