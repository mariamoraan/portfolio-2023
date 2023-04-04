import { useState } from "react"
import styled, { keyframes } from "styled-components"
import { SecondaryTitle } from "../../common/components/Title"
import { IOpinion } from "../../types/Opinion"
import { addOpinion } from "../utils/data"


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

const DEFAULT_OPINION: IOpinion = {
    number: "sjdaksdskad",
    name: "",
    picture: "",
    position: "",
    enterprise: "",
    opinion: "",
}

const OpinionsAdmin = () => {
    const [opinion, setOpinion] = useState<IOpinion>(DEFAULT_OPINION)
    const onSubmitAction = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await addOpinion(opinion)
        setOpinion(DEFAULT_OPINION)
    }
    return (
        <Wrapper>
            <SecondaryTitle>Your Opinions</SecondaryTitle>
            <Text>Add a new opinion by providing Text and Data about the author</Text>
            <Form onSubmit={(e) => onSubmitAction(e)}>
                <Label htmlFor="name">Name</Label>
                <Input type="text" value={opinion.name} name="name" id="name" onChange={(e) => setOpinion({...opinion, name: e.target.value})} />

                <Label htmlFor="picture">Picture</Label>
                <Input type="text"  value={opinion.picture} name="picture" id="picture" onChange={(e) => setOpinion({...opinion, picture: e.target.value})} />

                <Label htmlFor="position">Position</Label>
                <Input type="text"  value={opinion.position} name="position" id="position" onChange={(e) => setOpinion({...opinion, position: e.target.value})} />

                <Label htmlFor="enterprise">Enterprise</Label>
                <Input type="text"  value={opinion.enterprise} name="enterprise" id="enterprise" onChange={(e) => setOpinion({...opinion, enterprise: e.target.value})} />

                <Label htmlFor="opinion">Opinion</Label>
                <Textarea name="opinion"  value={opinion.opinion} id="opinion" rows={4} onChange={(e) => setOpinion({...opinion, opinion: e.target.value})} />

                <Submit type="submit" value={"Create Opinion"} />
            </Form>
        </Wrapper>
    )
}

export default OpinionsAdmin