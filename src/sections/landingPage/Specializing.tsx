import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { getArticles } from "../../admin/utils/data";
import { CenteredTitle } from "../../common/components/Title";
import { IArticle } from "../../types/Article";


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
    align-items: center;
    background: #F9F9FB;
    @media only screen and (max-width: 800px) {
        padding: 12px;
    }
`;

const Articles = styled.ul`
    padding: 24px 32px;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 24px;
    @media screen and (max-width: 800px) {
        padding: 24px 0;
        width: calc(100% - 0);
        flex-direction: column;
    }
`

const ArticleTitle = styled.h2`
    margin-top: 16px;  
    transition: 200ms ease;
    z-index: 100;
`
const ArticleText = styled.p` 
    transition: 200ms ease; 
    color: #99999A;
    z-index: 100;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
   -webkit-box-orient: vertical;
   align-self: start;
   justify-self: flex-start;
`
const ArticleKnowMore = styled.a`
    margin: 16px 0;  
    text-align: left;
    transition: 200ms ease;
    color: #4D4BF0;
    font-weight: bold;
    z-index: 100;
    textdecoration: none;
`

const ArticleTopLine = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 2px;
    transition: 500ms ease;
`

const Article = styled.li`
    flex: 1;
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr auto auto;
    overflow: hidden;
    background: white;
    padding: 12px;
    transition: 200ms ease;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 8px;
    &:nth-child(even) {
        ${ArticleTopLine} {
            background: #F7999D;
        }
    };
    &:nth-child(odd) {
        ${ArticleTopLine} {
            background: #AEAFFE;
        }
    };
    &:hover {
        color: white;
        cursor: pointer;
        ${ArticleTopLine} {
            height: 100%;
        }
        &:nth-child(even) {
            ${ArticleKnowMore}, ${ArticleText}, ${ArticleTitle} {
                color: black;
            }
        };
        &:nth-child(odd) {
            ${ArticleKnowMore}, ${ArticleText}, ${ArticleTitle} {
                color: black;
            }
        };
    };
`
const Specializing = () => {
    const [t] = useTranslation()
    const [articles, setArticles] = useState<IArticle[]>([])
    useEffect(() => {
        const setArticlesAsync = async() => {
            setArticles(await getArticles())
        }
        setArticlesAsync()
    }, [])
    return (
        <Wrapper>
            <CenteredTitle>{t("my_articles")}</CenteredTitle>
            <Articles>
                {
                    articles.map(({title, description, link}) => (
                        <Article key={title}>
                            <ArticleTopLine />
                            <ArticleTitle>{title}</ArticleTitle>
                            <ArticleText>{description}</ArticleText>
                            <ArticleKnowMore href={link}>Know More</ArticleKnowMore>
                        </Article>
                    ))
                }
            </Articles>
        </Wrapper>
    )
}


export default Specializing