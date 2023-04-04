import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface ITechnology {
    url: string,
    key: number,
    text: string,
}

const TECHNOLOGIES: ITechnology[] = [
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207", key: 1, text: "React"},
    {url: "https://cdn-icons-png.flaticon.com/512/25/25231.png", key: 2, text: "Github"},
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/500px-Nextjs-logo.svg.png", key: 3, text: "Nextjs"},
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20221110153201", key: 4, text: "Typescript"},
    {url: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png?hl=es-419", key: 5, text: "Firebase"}
]

const Section = styled.div`
    position: relative; 
    padding: 12px 24px;
    background: #F9F9FB;
`;

const Title3 = styled.h3`
    margin-bottom: 24px;
    font-size: 22px;
    text-align: center;
    color: #99999A;
`

const TechnologiesWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;
`;

const TechnologyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const TechnologyLogo = styled.img`
    height: 5vh;
    min-height: 20px;
    width: auto;
    @media screen and (max-width: 800px) {
        height: 24px;
    }
`

const TechnologyText = styled.p`
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    color: #99999A;
`

const Technologies = () => {
    const [t] = useTranslation()
    return (
        <Section id="about-me">
            <Title3>{t("work_with")}</Title3>
            <TechnologiesWrapper>
            {
                TECHNOLOGIES.map(({key, url, text}) => (
                        <TechnologyWrapper key={key}>
                            <TechnologyLogo src={url} />
                            <TechnologyText>{text}</TechnologyText>
                        </TechnologyWrapper>
                ))
            }
            </TechnologiesWrapper>
        </Section>
     
    )
}

export default Technologies