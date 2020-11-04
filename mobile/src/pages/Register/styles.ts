import styled from 'styled-components';
import {
    TextInput,
    View,
    Text,
    KeyboardAvoidingView
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


export const Section = styled(KeyboardAvoidingView)`
    height: 100%;

    align-items: center;
    justify-content: center;
    padding-top: ${props => props.className ? "100px" : "0"};
`

export const RegisterButton = styled(RectButton)`
    margin-top: 30px;

    width: 290px;
    height: 40px;

    background-color: #000;
    border-radius: 8px;

    align-items: center;
    justify-content: center;
`

export const RegisterButtonText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
    color: #FFF;
`

export const TitleText = styled(Text)`
    font-size: 40px;
    color: #000;
    
    margin-bottom: 30px;
`