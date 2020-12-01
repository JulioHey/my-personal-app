import React from 'react';

import Select from '../../components/Select/Select';

import Akali from "../../images/Akali.png";

import {
    Section,
    SmallerRowSection,
    Barra,
    MinionInput,
    GoldInput,
    ChampionSplash,
    KDASection,
    KDAInput,

} from './styles';

const players = [
    {label: "Robo", value: "1"},
    {label: "Cariok", value: "2"},
    {label: "Tinows", value: "3"},
    {label: "Brtt", value: "4"},
    {label: "Esa", value: "5"},
]

import { PlayerMatchI } from '../../interfaces/playerMatchInterface';
import Picker from 'react-native-picker-select';

interface PlayerCardI extends PlayerMatchI {
    onChangePlayer(value: string): void
    players?: Array<{
        label: string
        value: string
    }>
}

const PlayerCard: React.FC<PlayerCardI> = (props) => {
    return (
        <Section>
            <SmallerRowSection
                nativeID="first"
            >
                <Select
                    value={props.playerId}
                    onChangeFunction={props.onChangePlayer}
                    populatedOptions={props.players}
                />
            </SmallerRowSection>
            <SmallerRowSection>
                <KDASection>
                
                    <KDAInput />
                    <Barra>
                        /
                    </Barra>
                    <KDAInput />
                    <Barra>
                        /
                    </Barra>
                    <KDAInput />

                </KDASection>
            
                <MinionInput />
                <GoldInput />
                <ChampionSplash
                    source={Akali}
                />

            </SmallerRowSection>
            
        </Section>
    )
}

export default PlayerCard;