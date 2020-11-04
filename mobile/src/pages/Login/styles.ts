import styled from 'styled-components';
import {
    View, 
    TextInput, 
    TouchableOpacity,
    Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


export const TitleText = styled(Text)`
    font-size: 40px;
    color: #000;
    
    margin-bottom: 30px;
`

export const Section = styled(View)`
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #F0F0F0;

    flex-direction: column;
`

export const RowSection = styled(View)`
    align-items: center;
    justify-content: center;

    flex-direction: row;
    margin-top: 30px;
`

const LoginInput = styled(TextInput)`
    width: 290px;
    height: 40px;
    background-color: #fff;
    padding-left: 10px;
`;

export const EmailInput = styled(LoginInput)`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

export const PasswordInput = styled(LoginInput)`
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`
export const ForgotPasswordLink = styled(TouchableOpacity)`
    margin-top: 10px;
    width: 125px;
`

export const LinkText = styled(Text)`
    font-size: 12px;
    line-height: 14px;
    color: #000;
`

export const LoginButton = styled(RectButton)`
    margin-top: 24px;

    width: 300px;
    height: 40px;
    background-color: #000;
    border-radius: 8px;

    align-items: center;
    justify-content: center;
`

export const ButtonText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
    color: #FFF;
`

export const CreateAccountButton = styled(RectButton)`
    align-items: center;
    justify-content: center;

    width: 120px;
    height: 30px;
    border-radius: 8px;

    background-color: #000;
    margin-left: 30px;
`
