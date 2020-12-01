import React, { useCallback, useState } from 'react';

import BigButton from '../../components/BigButton/BigButton';
import Header from '../../components/Header/Header';
import MatchCard from '../../components/MatchCard/MatchCard';


import {
    Section,
    Title,
    RowSection,
    NewMatchButton,
    ButtonText,
    MatchsSection
} from './styles';

import {MatchRound} from '../../interfaces/matchRounds.interface';
import { useNavigation } from '@react-navigation/native';


const AdminDashBoard: React.FC = () => {
    const navigation = useNavigation();
    const [matchRounds, setMatchRounds] = useState<MatchRound[]>([
        {
            redSideTeam: "Flamendo E-Sports",
            blueSideTeam: "Kabum E-Sports",
            roundId: "1",
            matchHour: "12:00"
        },
        {
            redSideTeam: "Flamendo E-Sports",
            blueSideTeam: "Kabum E-Sports",
            roundId: "1",
            matchHour: "13:00"
        },        
        {
            redSideTeam: "Flamendo E-Sports",
            blueSideTeam: "Kabum E-Sports",
            roundId: "1",
            matchHour: "14:00"
        },        
        {
            redSideTeam: "Flamendo E-Sports",
            blueSideTeam: "Kabum E-Sports",
            roundId: "1",
            matchHour: "15:00"
        },
    ]);

    const goToEditPage = useCallback(() => {
        navigation.navigate("EditMatch")
    }, [])

    return (
        <Section>
            <Header 
                pageTitle="Rodada X"
            />
            
            <RowSection>
                <Title>
                    Jogos da Rodada
                </Title>
                <NewMatchButton>
                    <ButtonText>
                         + Nova Partida
                    </ButtonText>
                </NewMatchButton>
            </RowSection>

            <MatchsSection>
                {matchRounds.map(
                    (match, index) => {
                        if (index === matchRounds.length - 1) {
                            return (
                            <MatchCard
                                key={index}
                                matchHour={match.matchHour}
                                blueSideTeam={match.blueSideTeam}
                                redSideTeam={match.redSideTeam}
                                position="finish"
                                editMatch={goToEditPage}
                            />
                            )
                        } else {
                            return (
                                <MatchCard
                                    matchHour={match.matchHour}
                                    blueSideTeam={match.blueSideTeam}
                                    redSideTeam={match.redSideTeam}
                                    key={index}
                                    editMatch={goToEditPage}
                                />
                            )
                        }
                    }
                )}
            </MatchsSection>
    
            <BigButton 
                title="Adicionar rodada"
            />
            <BigButton 
                title="Finalizar rodada"
            />
            <BigButton 
                title="Editar jogador"
            />
            <BigButton 
                title="Editar time"
            />
        </Section>
    )
}

export default AdminDashBoard;
