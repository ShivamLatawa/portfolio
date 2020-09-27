import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <>
            <StyledHeaderWrapper>
                <h1>
                    Hi there! &nbsp;<span>&#128075;</span>
                </h1>

                <StyledNav>
                    <StyledList>
                        <Link to="/home">
                            <StyledListElement>Home</StyledListElement>
                        </Link>
                        <Link to="/about">
                            <StyledListElement>About</StyledListElement>
                        </Link>
                    </StyledList>
                </StyledNav>
            </StyledHeaderWrapper>
        </>
    );
};

export default Header;

const StyledHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.colors.lightGrey};
    color: ${(props) => props.theme.colors.black};
`;

const StyledNav = styled.nav``;

const StyledList = styled.ul`
    display: flex;
`;

const StyledListElement = styled.li`
    list-style: none;
    margin-left: 30px;
    font-size: 20px;
`;
