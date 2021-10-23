import * as React from 'react';
import {ScrollView} from 'react-native';

import Header from '../../components/Header'
import SliderItem from '../../components/SliderItem';
import {
     Banner,
     BannerButton,
     Container,
     Title,
     SliderMovie
    } from './styles';

function Home(){
    return (
        <Container>
            
            <Header   
            title="Comunidade Crisã Vida"
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
              <Title>Palavra Do Dia</Title> 
                <BannerButton activeOpacity={0.8}>
                    <Banner resizeMethod="resize" source={{uri:'https://cdn.pixabay.com/photo/2016/05/26/12/56/waterfalls-1417102_960_720.jpg'}}/>
                </BannerButton>
                    <SliderMovie
                        horizontal={true}
                        data={[1,2,3,4,5]}
                        renderItem={({item})=><SliderItem/>}
                        showsHorizontalScrollIndicator={false}
                    />

                <Title>Postagem</Title>
                    <SliderMovie
                        horizontal={true}
                        data={[1,2,3,4,5]}
                        renderItem={({item})=><SliderItem/>}
                        showsHorizontalScrollIndicator={false}
                    />

                <Title>Novidades</Title>
                    <SliderMovie
                        horizontal={true}
                        data={[1,2,3,4,5]}
                        renderItem={({item})=><SliderItem/>}
                        showsHorizontalScrollIndicator={false}
                    />
            </ScrollView>    

        </Container>
    )
}

export default Home;