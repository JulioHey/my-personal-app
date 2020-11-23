import React from "react";

import {
    Button,
    ButtonSection,
    ManageTitle
} from './styles';

interface BigButtonProps {
    title?: string
    callBackFunction?(): void       
}

const BigButton: React.FC<BigButtonProps> = (props) => {
    return (
        <ButtonSection>
            <Button
                onPress={props.callBackFunction}
            >
                <ManageTitle>
                    {props.title}
                </ManageTitle>
            </Button>
        </ButtonSection>
    )
}

export default BigButton;