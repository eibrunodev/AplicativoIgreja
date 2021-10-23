import * as React from 'react';

import {useNavigation} from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import {Container,Title,MenuButton} from './styles'


function Header({title}){
    const navigation = useNavigation();
    return (
        <Container>
            <MenuButton onPress={()=>(navigation.openDrawer())}>

                <AntDesign name="bars" size={24} color='#FFF' />
        
            </MenuButton>
            <Title>{title}</Title>
        </Container>
    )
}

export default Header;