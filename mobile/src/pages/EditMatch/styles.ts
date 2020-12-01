import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


export const FullSection = styled.ScrollView`
`

export const Section = styled.View`
    margin-top: 100px;

    justify-content: center;
    align-items: center;
`

export const TeamMatchInfoSection = styled.View`
    justify-content: center;
    align-items: center;

    width: 330px;

    border-radius: 8px;
    border: 1.5px solid #C4C4C4;
    background-color: #FFF;
    padding: 10px;
    background-color: #000;
`

export const RowSection = styled.View`
    justify-content: center;
    align-items: center;

    flex-direction: row;
    width: 330px;
    padding-bottom: 5px;
    padding-top: 5px;

    border-top-color: #C4C4C4;
    border-top-width: ${props => props.nativeID === "start" ? "0" : "1.5px"};
    
    border-bottom-color: #C4C4C4;
    border-bottom-width: ${props => props.nativeID === "finish" ? "0" : "1.5px"};
`

export const TeamName = styled.Text`
    font-size: 18px;
    line-height: 24px;
    color: #FFF;
`

export const TeamShield = styled.Image`
    height: 25px;
    color: #FFF;
`

export const SaveTeamButton = styled(RectButton)`
    width: 200px;
    height: 30px;
    border-radius: 8px;

    padding: 10px;
    background-color: #FFF;
`