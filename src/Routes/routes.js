import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5,FontAwesome } from '@expo/vector-icons';

import Stack from '../Routes/stack';
import Movies from '../pages/Movies';


const Drawer = createDrawerNavigator();

function Routes(){
    return (

        <Drawer.Navigator
          screenOptions={{
            headerShown: false,  
            drawerStyle:{
                backgroundColor: '#000',
                paddingTop: 20
            },
            drawerActiveBackgroundColor: '#B0B2B8',
            drawerActiveTintColor: '#FFFF',
            drawerInactiveTintColor: '#FFFF'

          }}
        >
            <Drawer.Screen 
            name="Home"
            component={Stack}
            options={{
              title: 'Home',
              drawerIcon:({focused,size,color})=>(
                <FontAwesome5 
                name="church" 
                size={size} 
                color={color} />
              ) 
            }}
        
             />
            <Drawer.Screen 
            name="Agenda" 
            component={Movies} 
            options={{
              drawerIcon:({focused,size,color})=>(
                <FontAwesome
                 name="calendar"
                 size={size} 
                 color={color}
                  />
              )
            }}
            />
            
        </Drawer.Navigator>
    )
}

export default Routes;