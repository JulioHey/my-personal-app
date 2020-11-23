import React, { useCallback, useState } from 'react';

import BasicTeamShield from '../../images/BasicShield.png';

import {
    Section,
    RowSection,
    RedTeamCard,
    TeamShield,
    HistoryMatchCircle,
    BigText,
    SmallText,
    MaterialIcon,
    ButtonMaterialIcons,
    SmallTextSection
} from './styles';

import { MatchRound } from '../../interfaces/matchRounds.interface';

interface MatchCardProps extends MatchRound {
    position?: string
    deleteMatch?(): void
    editMatch?(): void
}

const MatchCard: React.FC<MatchCardProps> = (props) => {
    return (
        <Section
        nativeID={props.position}
        >
            <RowSection>
                <SmallTextSection>
                    <SmallText
                        nativeID="red"
                    >
                        {props.redSideTeam}
                    </SmallText>
                </SmallTextSection>
                <BigText>
                    {props.matchHour}
                </BigText>
                <SmallTextSection>
                    <SmallText
                        nativeID="blue"
                    >
                        {props.blueSideTeam}
                    </SmallText>
                </SmallTextSection>
            </RowSection>
            <RowSection
                nativeID="finish"
            >
                <RedTeamCard>
                    <ButtonMaterialIcons
                        onPress={props.editMatch}
                    >
                        <MaterialIcon name="edit" size={26} color="#000" />
                    </ButtonMaterialIcons>
                    <HistoryMatchCircle 
                        nativeID="win"
                    />
                    <HistoryMatchCircle 
                        nativeID="win"
                    />
                    <HistoryMatchCircle 
                        nativeID="win"
                    />
                    <HistoryMatchCircle 
                        nativeID="win"
                    />
                    <TeamShield
                        testID="red"
                        source={BasicTeamShield}
                    />
                </RedTeamCard>
                <SmallText>X</SmallText>
                <RedTeamCard>
                    <TeamShield
                        testID="blue"
                        source={BasicTeamShield}
                    />
                    <HistoryMatchCircle
                    />
                    <HistoryMatchCircle
                    />
                    <HistoryMatchCircle
                    />
                    <HistoryMatchCircle
                    />
                    <ButtonMaterialIcons
                        onPress={props.deleteMatch}
                    >
                        <MaterialIcon name="delete" size={26} color="#000" />
                    </ButtonMaterialIcons>
                </RedTeamCard>
            </RowSection>
        </Section>
    )
}

export default MatchCard;