import React, { 
 } from 'react';

import Header from '../../components/Header/Header';

import {
    Section,
    LoginInput,
    RegisterButton,
    RegisterButtonText
} from './styles';


const Register: React.FC = () => {

    return (
        <Section>
            <Header pageTitle="Cadastro"/>
            <LoginInput />
            <LoginInput />
            <LoginInput />
            <LoginInput />
            <RegisterButton>
                <RegisterButtonText>
                    Finalizar Cadastro
                </RegisterButtonText>
            </RegisterButton>
        </Section>
    )
};

export default Register;