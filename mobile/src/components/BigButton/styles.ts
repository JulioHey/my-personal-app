import styled from 'styled-components/native';

import {
    Text
} from 'react-native';

import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';


export const ButtonSection = styled(TouchableOpacity)`
    height: 40px;
    width: 330px;

    background-color: #000;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    border: 1.5px solid #D3D3D3;
`

export const Button = styled(RectButton)`
    height: 40px;
    width: 330px;

    align-items: center;
    justify-content: center;

`

export const ManageTitle = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;

    color: #FFF;
`
