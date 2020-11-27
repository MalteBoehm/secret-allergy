import 'react-native-gesture-handler';
import * as React from 'react';
import Navigator from "./src/navigation/Navigator";
import LiveSearchProvider from "./src/context/LiveSearchProvider";
import SearchInputContextProvider from "./src/context/SearchInputContextProvider";
import ProtectedRoute from "./src/security/ProtectedRoute";
import AuthContextProvider from "./src/context/AuthContextProvider";


export default function App() {
  return (
      <AuthContextProvider>
          <SearchInputContextProvider>
                  <LiveSearchProvider>
                      <ProtectedRoute/>
                  </LiveSearchProvider>
          </SearchInputContextProvider>
      </AuthContextProvider>
        )
      }



