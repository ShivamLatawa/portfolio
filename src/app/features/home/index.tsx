import * as React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <StyledContent>
            <img src="../../../assets/cv.png" alt="Resume" />
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
