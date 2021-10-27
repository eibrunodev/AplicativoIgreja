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

function SliderItem({data,description}){
  
  return(
    
    <Container  activeOpacity={0.8}>
      {}
       <BannerItem
        
        source={{uri:data}}
       />
     
      <Title numberOfLines={1}>{description}</Title>
      <RateContainer>
       <AntDesign name="like1" size={12} color="#FFF" />
       <Rate>Segue-lá</Rate>
      </RateContainer>
      
      
    </Container>
  )
}

export default SliderItem;