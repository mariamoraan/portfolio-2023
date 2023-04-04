
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { getOpinions } from "../../admin/utils/data";
import { CenteredTitle } from "../../common/components/Title";
import { IOpinion } from "../../types/Opinion";

const Wrapper = styled.section`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 5vh auto;
    padding: 12px 24px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F9F9FB;
    @media screen and (max-width: 800px) {
        padding: 12px;
    }
`;

const OpinionsWrapper = styled.div`
    padding: 8px;
    margin-top: 24px;
    position: relative;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;
`

const OpinionWrapper = styled.div<{index: number, currentIndex: number}>`
    overflow: hidden;
    padding: 2px;
    margin: auto;
    background: white;
    width: 90vw;
    height: 100%;
    max-width: calc(0.9*1200px);
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 8px;
    transition: 800ms ease;
    opacity: ${props => props.index === props.currentIndex ? 1 : 0};
    z-index: ${props => props.index === props.currentIndex ? 1 : 0};
    transform: ${props => props.index === props.currentIndex ? "translateX(0)" : props.index > props.currentIndex ? "translateX(50%)" :  "translateX(-50%)"};
    @media screen and (max-width: 800px) {
        position: relative;
        padding: 24px 12px;
        width: calc(100% - 24px);
    }
};
`;

const OpinionTopWrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 65% 20%;
    grid-template-rows: auto;
    gap: 24px;
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 8px;
    }
`

const PictureWrapper = styled.div`
    @media screen and (max-width: 800px) {
        max-width: 100px;
    }
`

const Picture = styled.img`
    max-width: 100%;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid white;
`
const Info = styled.div`
    padding-top: 24px;
    height: auto;
    display: block;
    @media screen and (max-width: 800px) {
        padding-top: 0;
        margin-bottom: 12px;
    }
`

const InfoName = styled.p`
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: bold;
`

const InfoWork = styled.div`
    display: flex;
    gap: 0.5em;
    @media screen and (max-width: 800px) {
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;
    }
`
const InfoPosition = styled.p`
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: #99999A;
    &:after {
        content: ","
    }
`
const InfoEnterprise = styled.p`
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: #6969F4;
`

const ButtonsWrapper = styled.div`
    padding: 24px;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 800px) {
        padding: 0px;
        position: absolute;
        top: 12px;
        right: 12px;
    }
`

const Button = styled.button<{isActive: boolean}>`
    background: none;
    border: none;
    color: #99999A;
    opacity: ${props => props.isActive ? 1 : 0};
    transition: 200ms ease;
    &:hover {
        color: ${props => props.isActive ? "black" : "#99999A"};
        cursor: ${props => props.isActive ? "pointer" : ""};
    }
`

const Opinion = styled.p`
    width: calc(90% - 48px);
    margin-left: calc(10% + 24px);
    margin-bottom: 48px;
    @media screen and (max-width: 800px) {
        width: auto;
        margin: 0 8px;
    }
`
const Opinions = () => {
    const [t] = useTranslation()
    const [opinionIndex, setOpinionIndex] = useState(0)
    const [opinions, setOpinions] = useState<IOpinion[]>([])
    useEffect(() => {
        const setOpinionsAsync = async() => {
            setOpinions(await getOpinions())
        }
        setOpinionsAsync()
    }, [])
    const getNextOpinion = (index: number) => {
        return index + 1 < opinions.length ? Math.abs((index + 1) % (opinions.length)) : index
    }

    const getPrevOpinion = (index: number) => {
        return index > 0 ? Math.abs((index - 1) % (opinions.length)) : index
    }

    return (
        <Wrapper>
            <CenteredTitle>{t("people_are_saying")}</CenteredTitle>
            <OpinionsWrapper>
                {
                    opinions.map((opinion, index) => (
                        <OpinionWrapper index={index} currentIndex={opinionIndex}  key={opinion.number}>
                            <OpinionTopWrapper>
                            <PictureWrapper>
                                <Picture 
                                src={opinion.picture}
                                />
                            </PictureWrapper>
                            <Info>
                                <InfoName>{opinion.name}</InfoName>
                                <InfoWork>
                                    <InfoPosition>{opinion.position}</InfoPosition><InfoEnterprise>{opinion.enterprise}</InfoEnterprise>
                                </InfoWork>
                            </Info>
                            <ButtonsWrapper>
                                <Button 
                                    isActive={opinionIndex > 0} 
                                onClick={() => {setOpinionIndex((prev) => getPrevOpinion(prev))}}>
                                    <ArrowBack />
                                </Button>
                                <Button 
                                isActive={opinionIndex < opinions.length - 1} 
                                onClick={() => {setOpinionIndex((prev) => getNextOpinion(prev))}}>
                                    <ArrowForward />
                                </Button>
                            </ButtonsWrapper>
                        </OpinionTopWrapper>
                        <Opinion>{opinion.opinion}</Opinion>
                    </OpinionWrapper>
                    ))
                }
            </OpinionsWrapper>
        </Wrapper>
    )
}

export default Opinions