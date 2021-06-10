import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Inicio from './Components/Pages/Inicio.js';

const SwitchInicio = createSwitchNavigator(
  {
    Inicio: Inicio,
  },
  {
    initialRouteName: "Inicio",
    headerMode:'none'
  }
);

const AppContainer = createAppContainer(SwitchInicio);

export default class App extends React.Component{
  render() {
    return <AppContainer/>
  }
}