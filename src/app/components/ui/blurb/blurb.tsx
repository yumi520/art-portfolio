import React from 'react';
import Title from '../title/title.styles';
import Paragraph from '../paragraph/paragraph.styles';
import BlurbContainer from './blurb.styles';
import Button from '../button/button';

interface blurbProp {
    title: string;
    paragraph?: string;
    buttonText?: string;
    onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function Blurb({
    title,
    paragraph,
    buttonText,
    onButtonClick
}: blurbProp) {
    return (
        <BlurbContainer>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
            {buttonText && (
                <Button
                    message={buttonText}
                    onClick={onButtonClick || (() => console.log('Button clicked!'))}
                    />
            )}
                
        </BlurbContainer>

    );
}