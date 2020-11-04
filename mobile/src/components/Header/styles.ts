import styled from 'styled-components';
import {TouchableOpacity, View, Text} from 'react-native';

export const HeaderSection = styled(View)`
    position: absolute;
    top: 25px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    padding-left: 20px;
    padding-right: 20px;

    width: 100%;
    background-color: #FFF;
`

export const GoBackToLoginPageButton = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 40px;
`

export const HeaderPageTitle = styled(Text)`
    font-size: 18px;
    line-height: 24px;

    color: #000;
`