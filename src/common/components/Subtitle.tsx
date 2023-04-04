import React from "react";
import styled from "styled-components";

const SubtitleContainer = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 24px;
    color: #99999A;
`

const CenteredSubtitleContainer = styled(SubtitleContainer)`
    ${SubtitleContainer};
    text-align: center;
`

export const Subtitle = ({children}: {children?: React.ReactElement | string | null }) => {
    return <SubtitleContainer>{children}</SubtitleContainer>
}

export const CenteredSubtitle = ({children}: {children?: React.ReactElement | string | null }) => {
    return <CenteredSubtitleContainer>{children}</CenteredSubtitleContainer>
}
