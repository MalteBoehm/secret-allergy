import 'react-native-gesture-handler';
import * as React from 'react';
import Navigator from "./src/navigation/Navigator";
import LiveSearchProvider from "./src/context/LiveSearchProvider";





export default function App() {
  return (
      <LiveSearchProvider>
            <Navigator/>
      </LiveSearchProvider>
        )
      }



