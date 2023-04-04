import styled from "styled-components"
import AuthForm from "../components/AuthForm"
import { useAuth } from "../context/AuthContext"
import MainPanel from "./MainPanel"

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AuthPage = () => {
    const authContext = useAuth()
    return (
        <>
            {
                authContext?.currentUser ? <MainPanel /> : <Wrapper><AuthForm /></Wrapper>
            }
        </>
    )
}

export default AuthPage