import 'react-native-gesture-handler';
import * as React from 'react';
import ProtectedRoute from "./src/security/ProtectedRoute";
import AuthContextProvider from "./src/context/AuthContextProvider";


export default function App() {
  return (
      <AuthContextProvider>
          <ProtectedRoute/>
      </AuthContextProvider>
        )
      }



