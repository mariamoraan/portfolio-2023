import styled from "styled-components"
import MainInfo from "../components/MainInfo"
import SideMenu from "../components/SideMenu"
import { useAuth } from "../context/AuthContext"

const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "menu info";
`

const Menu = styled.div`
    padding: 24px;
    grid-area: menu;
    border-right: 1px solid #757575;
`

const Info = styled.div`
    padding: 24px;
    grid-area: info;
`
const Button = styled.button``

const MainPanel = () => {
    const authContext = useAuth()
    return (
        <Wrapper>
            <Menu><SideMenu email={authContext?.currentUser?.email || ''} /></Menu>
            <Info>
                <MainInfo />
            </Info>
        </Wrapper>
    )
}

export default MainPanel