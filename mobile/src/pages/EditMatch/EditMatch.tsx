import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Header from '../../components/Header/Header';
import Select from '../../components/Select/Select';

import { TeamShield } from '../../components/MatchCard/styles';

import BasicTeamShield from '../../images/BasicShield.png';

import {
    FullSection,
    Section,
    TeamMatchInfoSection,
    RowSection,
    SaveTeamButton,
} from './styles';

import PlayerCard from '../../components/PlayerCard/PlayerCard';

import api from '../../services/api';

const players = [
    {label: "Robo", value: "1"},
    {label: "Cariok", value: "2"},
    {label: "Tinows", value: "3"},
    {label: "Brtt", value: "4"},
    {label: "Esa", value: "5"},
]

const EditMatch: React.FC = () => {
    const [teamList, setTeamList] = useState<Array<any>>();
    const [selectedTeam, setSelectedTeam] = useState<string>()
    const [playerList, setPlayerList] = useState<Array<{
        label: string
        value: string
    }>>();
    const [redSideTopLaner, setRedSideTopLaner] = useState("1");
    
    useEffect(() => {
        try{
            api.get("/team").then(response => {
                const rawTeamList = response.data;

                const newTeamList = rawTeamList.map( (item: any) => {
                    return {
                        value: item.teamId,
                        label: item.teamName
                    }
                });

                setTeamList(newTeamList);
            });
        } catch(err) {
            alert("Failed to connect to server");
        }
        
    }, []);

    const playersListCall = useMemo(() => {
        try {
            api.post("player/team", {
                "playerTeamId": selectedTeam
            }).then(response => {
                const rawPlayerList = response.data;

                const newPlayerList = rawPlayerList.map( (item: any) => {
                    return {
                        value: item.playerId,
                        label: item.playerName
                    }
                });

                setPlayerList(newPlayerList);
            })
        } catch(err) {
            alert("Failed to connect to server")
        }
    }, [selectedTeam])
    

    return (
        <FullSection
        >
            <Header 
                pageTitle="Editar Partida"
            />

            <Section>

            <TeamMatchInfoSection>

                    <RowSection
                        nativeID="start"
                    >
                        <Select
                            width={190}
                            value={selectedTeam}
                            onChangeFunction={(value: string) => setSelectedTeam(value)}
                            populatedOptions={teamList}
                        />
                        <TeamShield 
                            source={BasicTeamShield}
                        />
                    </RowSection>
                    <PlayerCard
                        playerId={redSideTopLaner}
                        players={playerList}
                        onChangePlayer={(value) => setRedSideTopLaner(value)}
                    />
                    <PlayerCard
                        playerId={redSideTopLaner}
                        onChangePlayer={(value) => setRedSideTopLaner(value)}
                    />
                    <PlayerCard
                        playerId={redSideTopLaner}
                        onChangePlayer={(value) => setRedSideTopLaner(value)}
                    />
                    <PlayerCard
                        playerId={redSideTopLaner}
                        onChangePlayer={(value) => setRedSideTopLaner(value)}
                    />
                    <PlayerCard
                        playerId={redSideTopLaner}
                        onChangePlayer={(value) => setRedSideTopLaner(value)}
                    />
                    
                    <SaveTeamButton 
                        onPress={() => console.log(teamList)}
                    />

                </TeamMatchInfoSection>

            </Section>
            
        </FullSection>
    )
}

export default EditMatch;