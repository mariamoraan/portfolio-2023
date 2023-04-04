import { ArrowForwardRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CenteredTitle } from "../../common/components/Title";

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
`;

const ProjectsWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    @media only screen and (max-width: 1000px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`

const Project = styled.div<{backgroundColor: string, color: string}>`
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background: ${props => props.backgroundColor};
    border-radius: 12px;
    color: ${props => props.color};
    @media only screen and (max-width: 1000px) {
        max-width: 80%;
    }
`

const ProjectImage = styled.img`
    border-radius: 0 0 12px 12px;
`
const ProjectInfo = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-between;
`

const ProjectInfoText  = styled.div`
    padding-right: 12px;
    display: flex;
    gap: 8px;
    flex-direction: column;
`

const ProjectButton = styled.a`
    height: 48px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: white;
    border: none;
    border-radius: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transform: rotate(-45deg);
    color: black;
    transition: 200ms ease;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
const ProjectInfoTitle = styled.p`
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: bold;
`
const ProjectInfoDescription = styled.p`
    margin: 0;
    padding: 0;
    font-size: 20px;
`

interface IProject  {
    image: string,
    project: string,
    idea: string,
    backgroundColor: string,
    color: string,
    url: string,
}

const PROJECTS: IProject[] = [
    {image: "https://www.mariamoran.es/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwhvmxfqhgwx6%2F3OmcG5B2y2qyUkxTvmTmOJ%2F5a56f1d1d383bbacf959183f5e2117b0%2FzLPwfrydjEwC2sI7RzyPorcawebsite.jpg&w=3840&q=75", project: "Website of Orca.", idea: "Orca Website", backgroundColor: "#B6CCDB", color: "#F9F9FB", url: "https://getorca.com/"},
    {image: "https://www.mariamoran.es/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwhvmxfqhgwx6%2F4TkEdBdDj7tsjhHilAfr8X%2F178ff9690e28506f424d5348f90ea3e9%2Fhomepage.jpg&w=3840&q=75", project: "React App. Landing page for furniture shop.", idea: "Landing Page", backgroundColor: "#A4A6A7", color: "#F9F9FB", url:"https://mariamoraan.github.io/room-homepage/"},
    {image: "https://www.mariamoran.es/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwhvmxfqhgwx6%2F4MwASCZWYcKdRNGh6wdOTI%2F9f07d6b0a62b93179f0bf350367ffaa6%2Fbankweb.jpg&w=3840&q=75", project: "React App. Landing page for bank.", idea: "Bank Landing Page", backgroundColor: "#AFDCC6", color: "#F9F9FB", url:"https://mariamoraan.github.io/landing-page/"},
]


const Projects = () => {
    const [t] = useTranslation()
    return (
        <Wrapper id="work"> 
            <CenteredTitle>{t("projects")}</CenteredTitle>
            <ProjectsWrapper>
                {
                    PROJECTS.map((project) => (
                        <Project key={project.image} backgroundColor={project.backgroundColor} color={project.color} >
                            <ProjectInfo>
                                <ProjectInfoText>
                                    <ProjectInfoTitle>{project.idea}</ProjectInfoTitle>
                                    <ProjectInfoDescription>{project.project}</ProjectInfoDescription>
                                </ProjectInfoText>
                                <ProjectButton href={project.url}><ArrowForwardRounded /></ProjectButton>
                            </ProjectInfo>
                            <ProjectImage src={project.image} />
                        </Project>
                    ))
                }
            </ProjectsWrapper>
        </Wrapper>
    )
}

export default Projects