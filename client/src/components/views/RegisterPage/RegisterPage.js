import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_actions'
import { withRouter } from 'react-router-dom'

function RegisterPage(props) {
    const dispatch = useDispatch()

    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        let body = {
            id: Id,
            password: Password,
            email: Email
        }
        
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success) {
                props.history.push('/login')
            } else {
                alert('Failed to sign up')
            }
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '70vh'
        }}>
            
            
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>id</label>
                <input type="text" value={Id} onChange={onIdHandler} />

                <label>password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <br />
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
