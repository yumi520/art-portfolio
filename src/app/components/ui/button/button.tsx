import React, { MouseEvent } from 'react';
import ButtonContainer from './button.styles';

interface buttonProps {
    message: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}


export default function Button({
    message,
    onClick

}: buttonProps) {

    return (
        <ButtonContainer onClick={onClick}>
            {message}
        </ButtonContainer>

    );
}