import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from "styled-components";

const Wrapper = styled.footer`
    padding: 24px;
`

const Link = styled.a`
    text-decoration: none;
    transition: 200ms ease;
    color: #6969F4;
`

const NavWrapper = styled.nav`
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    ${Link} {
        color: #99999A;
        :hover {
            color: #6969F4;
        }
    }
`

const SocialWrapper = styled.ul`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    list-style: none;
    ${Link} {
        color: #6969F4;
        :hover {
            color: rgba(105, 105, 244, 0.8);
        }
    }
`

const SocialLink = styled.li`
    text-decoration: none;  
`

interface ILink {
    name: string;
    link: string;
}

interface ISocialLink {
    component: JSX.Element;
    link: string;
}

export const navLinks: ILink[] = [
    {name: "Home", link: "#home"},
    {name: "About me", link: "#about-me"},
    {name: "Work", link: "#work"},
]

export const socialLinks: ISocialLink[] = [
    {component: <LinkedInIcon />, link: "https://www.linkedin.com/in/maria-moran-luaces/?originalSubdomain=es"},
    {component: <TwitterIcon />, link: "https://twitter.com/_mariamoraan"},
    {component: <MailIcon />, link: "mailto:mariamoranluaces@gmail.com"},
]

const Footer = () => {
    return (
        <Wrapper>
            <NavWrapper>
                {
                    navLinks.map(({name, link}) => (
                        <Link key={link} href={link}>{name}</Link>
                    ))
                }
            </NavWrapper>
            <SocialWrapper>
                {
                    socialLinks.map(({component, link}) => (
                        <SocialLink key={link}><Link href={link}>{component}</Link></SocialLink>
                    ))
                }
            </SocialWrapper>
        </Wrapper>
    )
}

export default Footer