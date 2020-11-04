import styled from 'styled-components';
import {
    TextInput,
    View,
    Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


export const Section = styled(View)`
    height: 100%;

    align-items: center;
    justify-content: center;
`

export const LoginInput = styled(TextInput)`
    width: 290px;
    height: 40px;
    background-color: #fff;
    padding-left: 10px;
`;

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