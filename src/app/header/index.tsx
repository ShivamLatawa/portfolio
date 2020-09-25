import * as React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            Hi there! &nbsp;<span>&#128075;</span>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.lightGrey};
    font-size: 24px;
    color: ${(props) => props.theme.colors.black};
    padding: 10px;
`;
