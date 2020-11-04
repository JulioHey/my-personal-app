import React, { useCallback, useMemo } from 'react';

import {useNavigation} from '@react-navigation/native';

import {
    PasswordInput,
    Section,
    EmailInput,
    ForgotPasswordLink,
    LinkText,
    LoginButton,
    ButtonText,
    RowSection,
    CreateAccountButton,
    TitleText
} from './styles';


const Login: React.FC = () => {
    const navigation = useNavigation();

    const goToRegisterPage = useCallback(() => {
        navigation.navigate("Register");
    }, [navigation]);

    return (
        <Section>
            <TitleText>
                CartolaLoL
            </TitleText>
            <EmailInput /> 
            <PasswordInput />
            <ForgotPasswordLink>
                <LinkText>
                    Esqueceu minha senha
                </LinkText>
            </ForgotPasswordLink>
            <LoginButton>
                <ButtonText>
                    Entrar
                </ButtonText>
            </LoginButton>
            <RowSection>
                <LinkText>
                    Não tem conta?
                </LinkText>
                <CreateAccountButton onPress={goToRegisterPage}>
                    <ButtonText>
                        Cadastrar-se
                    </ButtonText>
                </CreateAccountButton>
            </RowSection>
        </Section>
    )
    };

export default Login;
