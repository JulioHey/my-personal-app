import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Header from '../../components/Header/Header';
import FloatInput from "../../components/FloatInput/FloatInput";

import {
    Section,
    TitleText,
    RegisterButton,
    RegisterButtonText
} from './styles';
import { Keyboard } from 'react-native';
import api from '../../services/api';


const Register: React.FC = () => {
    const [keyBoardShown, setKeyBoardShown] = useState(false)
    const [userEmail, setUserEmail] = useState({currentVlaue: "", isFocus: false});
    const [userName, setUserName] = useState({currentVlaue: "", isFocus: false});
    const [userPassword, setPassword] = useState({currentVlaue: "", isFocus: false});
    const [repeatedPassword, setRepeatPassword] = useState({currentVlaue: "", isFocus: false});

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => setKeyBoardShown(true));
        Keyboard.addListener("keyboardDidHide", () => setKeyBoardShown(false));
    
        // cleanup function
        return () => {
          Keyboard.removeListener("keyboardDidShow",() => setKeyBoardShown(true));
          Keyboard.removeListener("keyboardDidHide", () => setKeyBoardShown(false));
        };
      }, []);

    async function handleCreateUser() {
        const data = new FormData();        

        data.append("userEmail", userEmail.currentVlaue);
        data.append("userName", userName.currentVlaue);
        data.append("userPassword", userPassword.currentVlaue);

        const newData = {
            userEmail: userEmail.currentVlaue,
            userPassword: userPassword.currentVlaue,
            userName: userName.currentVlaue
        }

        console.log(data);

        const response = await api.post("/user", newData);

        if (response.status == 200) {
            alert("Usuario criado");
        } else {
            alert("Error")
        }
    };

    const EmailInput = useMemo(() => {
        return (
            <FloatInput 
                className={(userEmail.currentVlaue || userEmail.isFocus) ? "" : "floating-label"}
                position="start"
                name="email"
                value={userEmail.currentVlaue}
                onChange={(e: string) => setUserEmail({currentVlaue: e, isFocus: true})}
                onBlur={() => setUserEmail({currentVlaue: userEmail.currentVlaue, isFocus: false})}
                onFocus={() => setUserEmail({currentVlaue: userEmail.currentVlaue, isFocus: true})}
            />
        )
    }, [userEmail]);

    const UserNameInput = useMemo(() => {
        return (
            <FloatInput 
                className={(userName.currentVlaue || userName.isFocus) ? "" : "floating-label"}
                position="middle"
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
                position="middle"
                name="Senha"
                value={userPassword.currentVlaue}
                onChange={(e: string) => setPassword({currentVlaue: e, isFocus: true})}
                onBlur={() => setPassword({currentVlaue: userPassword.currentVlaue, isFocus: false})}
                onFocus={() => setPassword({currentVlaue: userPassword.currentVlaue, isFocus: true})}
                password={true}
            />
        )
    }, [userPassword]);
    
    const RepeatPassword = useMemo(() => {
        return (
            <FloatInput 
                className={(repeatedPassword.currentVlaue || repeatedPassword.isFocus) ? "" : "floating-label"}
                position="finish"
                name="Repetir senha"
                value={repeatedPassword.currentVlaue}
                onChange={(e: string) => setRepeatPassword({currentVlaue: e, isFocus: true})}
                onBlur={() => setRepeatPassword({currentVlaue: repeatedPassword.currentVlaue, isFocus: false})}
                onFocus={() => setRepeatPassword({currentVlaue: repeatedPassword.currentVlaue, isFocus: true})}
                password={true}
            />
        )
    }, [repeatedPassword]);

    return (
        <Section
            behaviour="position"
            className={keyBoardShown ? "keyBoardShown" : ""}
        >
            <Header pageTitle="Cadastro"/>
            <TitleText>
                CartolaLol
            </TitleText>
            {EmailInput}
            {UserNameInput}
            {PasswordInput}
            {RepeatPassword}

            <RegisterButton onPress={handleCreateUser}>
                <RegisterButtonText>
                    Finalizar Cadastro
                </RegisterButtonText>
            </RegisterButton>
        </Section>
    )
};

export default Register;