import * as React from 'react';
import styled from 'styled-components';
import cv from '../../../assets/cv.png';

const Home = () => {
    return (
        <StyledContent>
            <img src={cv} alt="Resume" />
        </StyledContent>
    );
};

export default Home;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
