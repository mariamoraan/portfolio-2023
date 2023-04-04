import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import { CenteredSubtitle } from "../../common/components/Subtitle";
import { CenteredTitle } from "../../common/components/Title";
import SocialMediaLateralBar from "../components/SocialMediaLateralBar";

const Wrapper = styled.section`
    position: relative;
    padding: 24px 0;
    margin: 0;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(1, auto);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    overflow: hidden;
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 48px;
    }
`;

const ContentWrapper = styled.section`
    padding: 0 24px;
    width: calc(100% - 48px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    grid-area: 1 / 2 / span 1 / span 3;
    text-align: center;
`;

const WavesWrapper = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;
    aspect-ratio: 5.7 / 1;
    grid-area: 2 / 1 / 3 / 3;
`

const waveAnimation1 = keyframes`
 0% { fill: #4D4BF0; }
 30% { fill: #6969F4; }
 100% { fill: #4D4BF0; }
`

const waveAnimation2 = keyframes`
 0% { fill: #6969F4; }
 30% { fill: #4D4BF0; }
 100% { fill: #6969F4; }
`

const Wave =  styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition: 200ms ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
`

const Wave1 = styled(Wave)`
    animation-name: ${waveAnimation1};
    fill=: #4D4BF0;
`

const Wave2 = styled(Wave)`
    animation-name: ${waveAnimation2};
    fill=: #6969F4;
`




const OnBoard = () => {
    const [t] = useTranslation()
    return (
        <Wrapper id="home">
            <SocialMediaLateralBar />
            <ContentWrapper>
                <CenteredTitle>{t("im_maria_moran")}</CenteredTitle>
                <CenteredSubtitle>{t("maria_moran_description")}</CenteredSubtitle>
            </ContentWrapper>
        </Wrapper>
    )
}


export default OnBoard