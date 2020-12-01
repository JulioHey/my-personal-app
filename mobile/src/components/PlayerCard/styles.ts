import styled from 'styled-components/native';

export const Section = styled.View`
    justify-content: space-around;
    align-items: center;


    height: 75px;
    width: 330px;
    
`

export const SmallerRowSection = styled.View`
    justify-content: ${props => props.nativeID ? "flex-start" : "space-between"};
    align-items: center;


    height: ${props => props.nativeID ? "25px" : "30px"};
    flex-direction: row;
    width: 330px;

    padding-left: 10px;
    
`

export const KDASection = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;

    width: 100px;

    background-color: #FFF;
    border-width: 1.5px;
    border-radius: 8px;
    border-color: #C0C0C0;
`

export const KDAInput = styled.TextInput`
    height: 30px;
    font-size: 16px;
    width:30px;
    padding: 5px;
`

export const Barra = styled.Text`
    font-size: 16px;
    font-weight: bold;
`

export const GoldInput = styled.TextInput`
    font-size: 16px;
    width: 60px;
    height: 30px;

    padding: 5px;

    background-color: #FFF;
    border-width: 1.5px;
    border-radius: 8px;
    border-color: #C0C0C0;
`

export const MinionInput = styled.TextInput`
    font-size: 16px;
    width: 45px;
    height: 30px;

    background-color: #FFF;
    border-width: 1.5px;
    border-radius: 8px;
    border-color: #C0C0C0;

    padding: 5px;
`

export const ChampionSelectButton = styled.Button`
    
`

export const ChampionSplash = styled.Image`
    width: 50px;
    height: 50px;

    position: relative;
    bottom: 10px;

    border-radius: 25px;
    border-width: 1.5px;
    border-color: #FFF;
    margin-right: 10px;
`