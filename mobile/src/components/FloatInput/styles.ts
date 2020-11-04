import styled from 'styled-components';
import {View, Text, TextInput} from 'react-native';


export const Section = styled(View)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;

    left: 75px;
`

export const FloatingLabel = styled(Text)`
    font-size: ${ props => props.className === "floating-label" ? "16px" : "12px"};
    bottom: ${ props => props.className === "floating-label" ? "-15px" : "0px"};
    line-height: 20px;

    color: #888;
    width: 150px;
    text-align: left;
    align-self: flex-start;

    position: relative;
    left: -275px;
`

export const Input = styled(TextInput)`
    width: 290px;
    height: 50px;
    background-color: #fff;
    padding-left: 15px;
    padding-top: 10px;

    
    border-top-right-radius:${props => props.className === 'start' || props.className === 'only' ? "8px" : "0px"};
    border-top-left-radius: ${props => props.className === 'start' || props.className === 'only' ? "8px" : "0px"};
    border-bottom-left-radius:${props => props.className === 'finish' || props.className === 'only' ? "8px" : "0px"};
    border-bottom-right-radius:${props => props.className === 'finish' || props.className === 'only' ? "8px" : "0px"};

    border: 1.5px solid #D3D3D3;
    border-top-width: ${props => props.className === 'finish' || props.className === 'middle' ? "0px" : "1.5px"};
    border-bottom-width: ${props => props.className === 'start' || props.className === 'middle' ? "0px" : "1.5px"};
    border-color: #D3D3D3;
`