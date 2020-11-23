import React, { useCallback, useMemo, useState } from 'react';

import {useNavigation} from '@react-navigation/native';

import FloatInput from '../../components/FloatInput/FloatInput';

import {
    Section,
    ForgotPasswordLink,
    LinkText,
    LoginButton,
    ButtonText,
    RowSection,
    CreateAccountButton,
    TitleText
} from './styles';
import api from '../../services/api';


const Login: React.FC = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = useState({currentVlaue: "", isFocus: false});
    const [userPassword, setPassword] = useState({currentVlaue: "", isFocus: false});

    const goToRegisterPage = useCallback(() => {
        navigation.navigate("Register");
    }, [navigation]);

    async function handleLoginUser() {
        // const userData = {
        //     userName: userName.currentVlaue,
        //     userPassword: userPassword.currentVlaue
        // }

        // try {
        //     const response = await api.post("/user/login", userData);

        //     if (response.status == 200) {
        //         alert("Login Sucesso")
        //     } else {
        //         alert("Login fracasso")
        //     }
        // } catch(err) {
        //     alert("Usuário ou senha incorretos...")
        // }

        navigation.navigate("AdminDashBoard");
    }

    const UserNameInput = useMemo(() => {
        return (
            <FloatInput 
                className={(userName.currentVlaue || userName.isFocus) ? "" : "floating-label"}
                position="start"
                name="Nome de usuário"
                value={userName.currentVlaue}
                onChange={(e: string) => setUserName({currentVlaue: e, isFocus: true})}
                onBlur={() => setUserName({currentVlaue: userName.currentVlaue, isFocus: false})}
                onFocus={() => setUserName({currentVlaue: userName.currentVlaue, isFocus: true})}
            />
        )
    }, [userName]);

    const PasswordInput = useMemo(() => {
        return (
            <FloatInput 
                className={(userPassword.currentVlaue || userPassword.isFocus) ? "" : "floating-label"}
                position="finish"
                name="Senha"
                value={userPassword.currentVlaue}
                onChange={(e: string) => setPassword({currentVlaue: e, isFocus: true})}
                onBlur={() => setPassword({currentVlaue: userPassword.currentVlaue, isFocus: false})}
                onFocus={() => setPassword({currentVlaue: userPassword.currentVlaue, isFocus: true})}
                password={true}
            />
        )
    }, [userPassword]);

    return (
        <Section>
            <TitleText>
                CartolaLoL
            </TitleText>
            {UserNameInput}
            {PasswordInput}
            <ForgotPasswordLink>
                <LinkText>
                    Esqueceu minha senha
                </LinkText>
            </ForgotPasswordLink>
            <LoginButton 
                onPress={handleLoginUser}
            >
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
