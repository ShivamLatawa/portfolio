import * as React from 'react';
import styled from 'styled-components';
import cv from '../../../assets/cv.png';

const About = () => {
    return (
        <StyledContent>
            <img width="100%" src={cv} alt="Resume" />
        </StyledContent>
    );
};

export default About;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
