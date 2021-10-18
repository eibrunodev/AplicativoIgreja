import * as React from 'react';
import {View,Text }from 'react-native';



import Header from '../../components/Header'

import {Container} from './styles';

function Home(){
    return (
        <Container>
            
            <Header   
            title="Comunidade Crisã Vida"
            />
            <Text>Home</Text>
        </Container>
    )
}

export default Home;