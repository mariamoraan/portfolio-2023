import { useState } from "react"
import styled, { keyframes } from "styled-components"
import { SecondaryTitle } from "../../common/components/Title"
import { IArticle } from "../../types/Article"
import { addArticle } from "../utils/data"

const breatheAnimation = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

const Wrapper = styled.div`
animation-name: ${breatheAnimation};
animation-duration: 2s;
animation-iteration-count: 1;
`

const Form = styled.form`
    margin-top: 24px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
`

const Text = styled.p``
const Label = styled.label`
    margin-top: 24px;
`
const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid black;
`
const Textarea = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid black;
`
const Submit = styled.input`
    margin-top: 24px;
    padding: 12px 32px;
    background: transparent;
    border: 1px solid black;
    border-radius: 16px;
    font-size: 16px;
`

const BlogAdmin = () => {
    const [article, setArticle] = useState<IArticle>({title:"", description: "", date: new Date(), link:""})
    const onSubmitAction = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await addArticle(article)
        setArticle({title:"", description: "", date: new Date(), link:""})
    }
    return (
        <Wrapper>
            <SecondaryTitle>Your Posts</SecondaryTitle>
            <Text>Add a new post by providing a Title and a Description</Text>
            <Form onSubmit={(e) => onSubmitAction(e)}>
                <Label htmlFor="title">Title</Label>
                <Input type="text" name="title" id="title" onChange={(e) => setArticle({...article, title: e.target.value})} />

                <Label htmlFor="link">Link</Label>
                <Input type="text" name="link" id="link" onChange={(e) => setArticle({...article, link: e.target.value})} />

                <Label htmlFor="description">Description</Label>
                <Textarea name="title" id="description" rows={4} onChange={(e) => setArticle({...article, description: e.target.value})} />

                <Label htmlFor="date">Date</Label>
                <Input type="date" name="date" id="date" onChange={(e) => setArticle({...article, date: new Date(e.target.value)})} />

                <Submit type="submit" value={"Create Post"} />
            </Form>
        </Wrapper>
    )
}

export default BlogAdmin