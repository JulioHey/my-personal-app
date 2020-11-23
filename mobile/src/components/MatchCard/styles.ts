import styled from 'styled-components';

import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    MaterialIcons
} from '@expo/vector-icons';


export const Section = styled(View)`
    width: 330px;
    height: 60px;
    align-items: center;
    justify-content: center;
    background-color: #FFF;

    border-bottom-color: #D3D3D3;

    border-radius: 8px;

    border: 1.5px solid #D3D3D3;

    margin-bottom: 15px;
`

export const RowSection = styled(View)`
    width: 330px;
    align-items: ${props => props.nativeID === "finish" ? "center" : "baseline"};
    justify-content: center;


    flex-direction: row;
    margin-bottom: ${props => props.nativeID === 'finish' ? "5px" : "0"};
`

export const RedTeamCard = styled(View)`
    width: 155px;
    height: 30px;
    align-items: center;
    justify-content: center;

    flex-direction: row;
`

export const TeamShield = styled(Image)`
    height: 25px;
    margin-left: ${props => props.testID === 'red' ? "7px" : "3px"};
    margin-right: ${props => props.testID === 'blue' ? "7px" : "3px"};
`


export const HistoryMatchCircle = styled(View)`
    height: 12px;
    width: 12px;

    border-radius: 6px;
    background-color: ${props => props.nativeID === "win" ? "#00800D" : "#F00"};
    margin: 3px;
`

export const BigText = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    width: 40px;

    margin-left: 10px;
    margin-right: 10px;
`

export const SmallTextSection = styled(View)`
    width: 130px;
`

export const SmallText = styled(Text)`
    font-size: 12px;
    font-weight: bold;

    color: #0E0E0E;
    text-align: ${props => props.nativeID === "red" ? "right" : "left"};
`

export const MaterialIcon = styled(MaterialIcons)`
  margin: 5px 5px 0;
`

export const ButtonMaterialIcons = styled(TouchableOpacity)`
    height: 40px;
    width: 40px;
`