import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Subtitle } from "../../common/components/Subtitle";
import { Title } from "../../common/components/Title";

const OptionsList = styled.ul`
    margin: 32px 0 12px 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    list-style: none;
`
const Option = styled.div<{isActive: boolean}>`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    text-decoration: none;
    color: ${props => props.isActive ? 'white' : 'black'};
    cursor: pointer;
    background: ${props => props.isActive ? '#6565F3' : 'white'};
    transition: 500ms ease;
    &:hover {
        color: ${props => props.isActive ? 'black' : '#6565F3'};
    }
`

const OutletWrapper = styled.div`
    margin-top: 24px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

interface IOption {
    name: string,
    key: string,
}
const options: IOption[] = [
    {name: "Manage your posts", key: "blog"},
    {name: "Manage your opinions", key: "opinions"},
    {name: "Manaje your projects", key: "3"},
    {name: "Manage your personal info", key: "4"},
]

const MainInfo = () => {
    const location = useLocation();
    return (
        <>
            <Title>Good Morning, Maria</Title>
            <Subtitle>This is the main panel</Subtitle>
            <OptionsList>
                {
                    options.map((option) => (
                        <StyledLink key={option.key} to={`/admin/${option.key}`} >
                            <Option isActive={location.pathname.includes(option.key)}>
                                {option.name}
                            </Option>
                        </StyledLink>
                    ))
                }
            </OptionsList>
            <OutletWrapper><Outlet /></OutletWrapper>
        </>
    )
}

export default MainInfo