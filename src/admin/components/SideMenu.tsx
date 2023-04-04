import styled from "styled-components"
import { useAuth } from "../context/AuthContext"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 24px;
    text-transform: uppercase;
    &:before {
        margin-right: 4px;
        content: "<";
        color: #6565F3;
    }
    &:after {
        margin-left: 4px;
        content: "/>";
        color: #6565F3;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    border-radius: 100%;
`
const Image = styled.img`
    padding: 4px;
    width: 100px;
    border-radius: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`

const Button = styled.button`
    padding: 12px 24px;
    cursor: pointer;
    background: #6565F3;
    color: white;
    border: none;
    border-radius: 24px;
    font-weight: bold;
`

const SideMenu = ({email}:{email: string}) => {
    const authContext = useAuth()
    return (
        <Wrapper>
            <Title>Mi Portfolio</Title>
            <ImageWrapper>
                <Image src="data:image/jpeg;base64,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" />
            </ImageWrapper>
            <p>{email}</p>
            <Button onClick={authContext?.signOut}>Log Out</Button>
        </Wrapper>
    )
}

export default SideMenu