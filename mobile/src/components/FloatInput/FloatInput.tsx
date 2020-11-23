import React from 'react';

import {
    Section,
    FloatingLabel,
    Input
} from './styles';

interface FloatInputProps {
    name?: string
    className?: string
    value?: string
    onChange?(e: string): void
    onFocus?(): void
    onBlur?(): void
    password?: boolean
    position?: string
}

const FloatInput: React.FC<FloatInputProps> = ({name, className, value, onChange, onBlur, onFocus, password, position}) => {
    return (
        <Section>
            <Input 
                value={value}
                onChangeText={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                secureTextEntry={password}
                className={position}
            />
            <FloatingLabel 
                className={className}
            >
                {name}
            </FloatingLabel>
        </Section>
    )
};

export default FloatInput;