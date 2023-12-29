import React, { useState, useEffect } from 'react'
import { API } from '../../service/api'
import { TextField, Box, Button, styled, Typography } from '@mui/material'

const CmpWrapper = styled(Box)`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Component = styled(Box)`
    width: 400px;
    box-shadow: 5px 2px 5px 2px rgba(0 0 0/ 0.6);
`

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
    width:100%;
    text-align: center;
`

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}


function Login() {

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account, toggleAccount] = useState('login')
    const [signup, setSingup] = useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues)

    const inputChange = (e) => {
        setSingup({ ...signup, [e.target.name]: e.target.value })
        console.log(e.target.name, e.target.value)
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup)
    }

    return (
        <CmpWrapper>
            {account === 'login' ?
                // login section
                <Component>
                    <Image src={imageURL} alt="" />
                    <Wrapper>
                        <TextField
                            variant='standard'
                            name='username'
                            placeholder='Enter your Username'
                        />
                        <TextField
                            variant='standard'
                            name='password'
                            placeholder='Enter your Password'
                        />
                        <LoginButton variant='contained'>
                            Login
                        </LoginButton>
                        <Text>OR</Text>
                        <SignupButton onClick={() => toggleAccount('Signup')}>
                            Sign up
                        </SignupButton>
                    </Wrapper>
                </Component>

                :

                // signup section
                <Component>
                    <Image src={imageURL} alt="" />
                    <Wrapper>
                        <TextField
                            variant='standard'
                            name='name'
                            onChange={(e) => inputChange(e)}
                            placeholder='Enter your Full Name'
                        />
                        <TextField
                            variant='standard'
                            name='username'
                            onChange={(e) => inputChange(e)}
                            placeholder='Enter your Username'
                        />
                        <TextField
                            variant='standard'
                            name='password'
                            onChange={(e) => inputChange(e)}
                            placeholder='Enter your Password'
                        />
                        <SignupButton
                            variant='contained'
                            onClick={() => signupUser()}
                        >
                            Sign up
                        </SignupButton>
                        <Text>OR</Text>
                        <LoginButton onClick={() => toggleAccount('login')}>
                            Already Have an account ?
                        </LoginButton>
                    </Wrapper>
                </Component>

            }
        </CmpWrapper >
    )
}

export default Login