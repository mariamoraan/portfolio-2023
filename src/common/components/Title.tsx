import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 56px;
    color: #161616;
`
const CenteredTitleContainer = styled(TitleContainer)`
  ${TitleContainer};
  text-align: center;
`;

const SecondaryTitleContainer = styled(TitleContainer)`
  ${TitleContainer};
  font-size: 32px;
  color: #6565F3;
`;


export const Title = ({children}: {children: React.ReactElement | string | null }) => {
    return <TitleContainer>{children}</TitleContainer>
}

export const SecondaryTitle = ({children}: {children: React.ReactElement | string | null }) => {
    return <SecondaryTitleContainer>{children}</SecondaryTitleContainer>
}

export const CenteredTitle = ({children}: {children: React.ReactElement | string | null }) => {
    return <CenteredTitleContainer>{children}</CenteredTitleContainer>
}
