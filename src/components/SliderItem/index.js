import React from "react";
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  RateContainer,
  Title,
  BannerItem,
  Rate
} 
from "./styles"

function SliderItem(){
  return(
    <Container activeOpacity={0.8}>
      <BannerItem
        source={{uri:"https://cdn.pixabay.com/photo/2021/09/23/09/01/swan-6649194_960_720.jpg"}}
      />
      <Title numberOfLines={1}>Titulo de alguma coisa </Title>
      <RateContainer>
       <AntDesign name="like1" size={12} color="#FFF" />
       <Rate>9/10</Rate>
      </RateContainer>
      
      
    </Container>
  )
}

export default SliderItem;