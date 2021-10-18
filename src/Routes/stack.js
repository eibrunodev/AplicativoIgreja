import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home'

const Tabs = createNativeStackNavigator();
function Stack(){
    return(
        <Tabs.Navigator>
            <Tabs.Screen 
             options={{
                headerShown: false,
             }}
            name='Home' 
            component={Home}
            
            />
        </Tabs.Navigator>
    )
}

export default Stack;