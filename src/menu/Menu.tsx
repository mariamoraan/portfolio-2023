import styled from "styled-components";
import { navLinks } from "./Footer";

const Wrapper = styled.section`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    padding: 8px 24px;
    width: calc(100vw - 48px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    background: #F9F9FB;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const LogoWrapper = styled.div`
    flex: 1
`

const Link = styled.a`
    text-decoration: none;
    transition: 200ms ease;
    &:hover {
        cursor:pointer;
        color: #6969F4;
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    background: #F9F9FB;
    ${Link} {
        color: #99999A;
        :hover {
            color: #6969F4;
        }
    }
`

const Button = styled.a`
    padding: 18px 36px;
    color: #F9F9FB;
    background: #6969F4;
    border: 1px solid #6969F4;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const Menu = () => {
    return (
        <Wrapper>
            <LogoWrapper><h2>MM</h2></LogoWrapper>
            <Nav>
                {
                    navLinks.map((link) => (
                        <Link key={link.link} href={link.link}>{link.name}</Link>
                    ))
                }
            </Nav>
            <Button href={"mailto:mariamoranluaces@gmail.com"}>Hire me</Button>
        </Wrapper>
    )
}

export default Menu