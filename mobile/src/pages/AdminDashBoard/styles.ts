import styled from 'styled-components';

import {
    View,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Section = styled(View)`
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #F0F0F0;

    flex-direction: column;
`

export const RowSection = styled(View)`
    width: 330px;
    align-items: baseline;
    justify-content: space-between;

    flex-direction: row;

    border-bottom-color: #C4C4C4;
    border-bottom-width: 1.5px;

    margin-bottom: 15px;
`

export const Title = styled(Text)`
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;

    color: #000;
`

export const NewMatchButton = styled(TouchableOpacity)`
    align-self: flex-end;
`

export const ButtonText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;

    text-align: left;
    color: #000;
`

export const MatchsSection = styled(View)`
    width: 330px;
    margin-bottom: 30px;

    border-bottom-color: #C4C4C4;
    border-bottom-width: 1.5px;

    align-items: center;
    justify-content: center;

    flex-direction: column;
`
