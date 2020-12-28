import * as React from 'react';
import styled from 'styled-components';
import profile from '../../../assets/profile.jpg';

const Home = () => {
    return (
        <StyledWrapper>
            <StyledContent>
                <StyledText>
                    Hey, I'm <StyledSpan>Shivam.</StyledSpan>
                </StyledText>
                <StyledParagraph>
                    A self motivated, front-end engineer with more than 6 years of web development experience,
                    specialising in UI with a keen interest in full-stack development.
                </StyledParagraph>
            </StyledContent>
            <StyledImg src={profile} alt="Shivam's image" />
        </StyledWrapper>
    );
};

export default Home;

const StyledWrapper = styled.div`
    display: flex;
    margin-top: 4rem;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        margin-top: 1rem;
    }
`;
const StyledContent = styled.div`
    width: 48%;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const StyledImg = styled.img`
    max-width: 50%;
    max-height: 50%;
    width: 50%;
    height: 50%;

    @media (max-width: 1024px) {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        margin-top: 3rem;
    }
`;
const StyledSpan = styled.span`
    color: #e31b6d;
`;
const StyledText = styled.h1`
    color: ${(props) => props.theme.colors.white};
    font-size: 3.5rem;
    font-weight: 400;

    @media (max-width: 1024px) {
        font-size: 2.5rem;
    }
`;
const StyledParagraph = styled.p`
    font-size: 2rem;
    line-height: 3rem;
    color: ${(props) => props.theme.colors.darkGrey};
`;
