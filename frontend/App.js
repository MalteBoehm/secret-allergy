import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  return (
    <appJs >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </appJs>
  );
}

const appJs = styled.View`
height:100%;`
