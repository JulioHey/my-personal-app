import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown:false,
                cardStyle:{backgroundColor: "#f2f3f5"}
            }} >
                <Screen 
                    name="Login" 
                    component={Login}
                />
                <Screen 
                    name="Register" 
                    component={Register}
                />
            </Navigator>
        </NavigationContainer>
    )
}