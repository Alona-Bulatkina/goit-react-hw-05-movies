import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { GlobalStyle } from '../GlobalStyle';

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;
const Link = styled(NavLink)`
    &.active {
        color: red;
    }
`;

const Wrapper = styled.div`
padding: 40px;
`;

export const Layout = () => {
    return (
        <Wrapper>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>
            <GlobalStyle />
        </Wrapper>
    );
};