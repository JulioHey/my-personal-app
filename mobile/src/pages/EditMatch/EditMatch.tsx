import React from 'react';
import Header from '../../components/Header/Header';

import {
    Section,
    TeamMatchInfoSection,
    RowSection,
    TeamName
} from './styles';


const EditMatch: React.FC = () => {
    return (
        <Section>
            <Header 
                pageTitle="Editar Partida"
            />

            <TeamMatchInfoSection>

                <RowSection>
                    <TeamName>
                        Flamengo E-Sports
                    </TeamName>
                </RowSection>

            </TeamMatchInfoSection>

        </Section>
    )
}

export default EditMatch;