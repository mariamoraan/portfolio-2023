import { useState } from "react"
import styled from "styled-components"
import { Subtitle } from "../../common/components/Subtitle"
import { Title } from "../../common/components/Title"
import { firebaseSignInWithEmailAndPassword } from "../utils/auth"


const Wrapper = styled.div`
    padding: 48px;
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Form = styled.form`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Label = styled.label`
    color: #6969F4;
    font-weight: bold;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background: transparent;
`

const SubmitButton = styled.input`
    position: relative;
    margin: auto;
    margin-top: 24px;
    width: fit-content;
    display: inline-block;
    padding: 24px 36px;
    background: #6969F4;
    color: white;
    border: none;
    border-radius: 24px;
    cursor: pointer;
`


const AuthForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        firebaseSignInWithEmailAndPassword(email, password)
        setEmail('')
        setPassword('')
    }

    return (
    <Wrapper>
        <Title>Sign In</Title>
        <Subtitle>Not the admin? Go Back</Subtitle>
        <Form onSubmit={(e) => onSubmit(e)}>
            <Label>Email</Label>
            <Input type="email" onChange={(event) => {setEmail(event.target.value)}} />
            <Label>Password</Label>
            <Input type="password" onChange={(event) => {setPassword(event.target.value)}} />
            <SubmitButton type="submit" value="Login" />
        </Form>
    </Wrapper>
    )
}

export default AuthForm