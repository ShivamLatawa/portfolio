import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/**
 * Description of the component if needed
 */
const Header = () => {
    return (
        <>
            <StyledHeaderWrapper>
                <StyledHeader>
                    SHIVAM LATAWA &nbsp;<span>&#128075;</span>
                </StyledHeader>

                <StyledNav>
                    <StyledList>
                        <StyledLink to="/home" exact activeClassName="active">
                            <StyledListElement>Home</StyledListElement>
                        </StyledLink>
                        <StyledLink to="/about" activeClassName="active">
                            <StyledListElement>About</StyledListElement>
                        </StyledLink>
                        <StyledLink to="/blogs" activeClassName="active">
                            <StyledListElement>Blogs</StyledListElement>
                        </StyledLink>
                    </StyledList>
                </StyledNav>
            </StyledHeaderWrapper>
        </>
    );
};

/* @component */
export default Header;

const StyledHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
`;

const StyledNav = styled.nav``;

const StyledHeader = styled.h1`
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    padding: 10;

    &.active {
        border-bottom: 4px solid ${(props) => props.theme.colors.white};
    }
`;

const StyledList = styled.ul`
    display: flex;
`;

const StyledListElement = styled.li`
    list-style: none;
    padding: 10px 15px;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.darkGrey};
`;

Header.defaultProps = {
    disabled: false,
    primary: false,
    raised: false,
};
