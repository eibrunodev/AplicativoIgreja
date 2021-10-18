import * as React from 'react';
import { View,Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import {Container,Title,MenuButton} from './styles'

const navigation = useNavigation();
function Header({title}){
    
    return (
        <Container>
            <MenuButton  onPress={()=>navigation.openDrawer()}>

                <AntDesign name="bars" size={24} color='#FFF' />
        
            </MenuButton>
            <Title>{title}</Title>
        </Container>
    )
}

export default Header;