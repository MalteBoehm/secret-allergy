import * as React from 'react';
import Navigator from './src/screens/Navigator';
import styled from 'styled-components/native';
import 'react-native-gesture-handler';
import DashboardScreen from "./src/screens/Dashboard/DashboardScreen";


export default function App() {
  return (
          <AppContainer>
             <Navigator/>
          </AppContainer>
        );
}

const AppContainer = styled.View`
      height:100%;
      width: 100%;
`
