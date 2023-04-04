import styled from "styled-components";
import { socialLinks } from '../../menu/Footer';

const Wrapper = styled.ul`
    padding: 0;
    margin: 0 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    list-style: none;
    @media screen and (max-width: 800px) {
        flex-direction: row;
    }
`

const Item = styled.li`
    padding: 8px;
    margin: 0;
    transition: 200ms ease;
    color: #6969F4;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        border: 1px solid #6969F4;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #6969F4;
`


const SocialMediaLateralBar = () => {
    return (
        <Wrapper>
            {
                socialLinks.map((link) => 
                <Item key={link.link}>
                    <Link  href={link.link}>{link.component}</Link>
                </Item>)
            }
        </Wrapper>
    )
}

export default SocialMediaLateralBar