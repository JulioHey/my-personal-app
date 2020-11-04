import React, { useCallback } from 'react';

import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    GoBackToLoginPageButton,
    HeaderPageTitle,
    HeaderSection
} from './styles';

interface HeaderProps {
    pageTitle: string
}


const Header: React.FC<HeaderProps> = (props) => {
    const navigation = useNavigation();

    const goToLoginPage = useCallback(() => {
        navigation.navigate("Login");
    }, [navigation]);


    return (
        <HeaderSection>
            <GoBackToLoginPageButton onPress={goToLoginPage}>
                <Feather name="arrow-left" size={24} color="black" />
            </GoBackToLoginPageButton>
            <HeaderPageTitle>
                {props.pageTitle}
            </HeaderPageTitle>
            <FontAwesome name="registered" size={24} color="black" />
        </HeaderSection>
    )
}

export default Header;