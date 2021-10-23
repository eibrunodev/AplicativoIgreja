import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:#545677;
    flex: 1;
    padding: 3px 0;
`;

export const Title = styled.Text`
    padding-top: 20px ;
    padding-bottom: 8px;
    padding-left: 14px;
    padding-right: 14px;
    font-size:24px;
    color: #fff;
    font-weight: bold;
`;
export const BannerButton = styled.TouchableOpacity`

`;
export const Banner = styled.Image`
 height:140px;
 border-radius:6px;
 margin:0 15px;

`;

export const SliderMovie = styled.FlatList`
    height:150px;
    padding:0 14px;
`; 