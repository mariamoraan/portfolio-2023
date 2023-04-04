import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CenteredTitle } from "../common/components/Title";

const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 5vh auto;
    max-width: min(1200px, 90%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px) {
        padding: 0 24px;
        max-width: auto;
    }
`

const ContactWrapper = styled.div`
    padding: 48px;
    margin: 24px 0;
    width: 90%;
    display: flex;
    gap: 48px;
    justify-content: center;
    align-items: center;
    background: #4D4BF0;
    border-radius: 12px;
    @media screen and (max-width: 1000px) {
        width: 80%;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
`

const SayHello = styled.div`
    color: white;
    font-size: 32px;
    font-weight: bold;
`

const Email = styled.div`
    color: white;
    font-size: 21px;
    font-weight: bold;
`

const ContactButton = styled.a`
    padding: 24px 48px;
    background: white;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #4D4BF0;
    transition: 200ms ease;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const Contact = () => {
    const [t] = useTranslation()
    return (
        <Wrapper>
            <CenteredTitle>{t("contact")}</CenteredTitle>
            <ContactWrapper>
                <SayHello>Say, Hello !</SayHello>
                <Email>mariamoranluaces@gmail.com</Email>
                <ContactButton href="mailto:mariamoranluaces@gmail.com">Say, Hello</ContactButton>
            </ContactWrapper>
        </Wrapper>
    )
}

export default Contact