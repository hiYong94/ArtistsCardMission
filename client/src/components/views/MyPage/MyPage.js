import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

function RegisterPage(props) {
    const dispatch = useDispatch()

    const [UserId, setUserId] = useState("")
    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    // useEffect(() => {
    //     axios.get(`/api/user/${UserId}`)
    //         .then((response) => {
    //             if(response.data.success) {
    //                 console.log(response.data.result)
    //             } else {
    //                 alert('Failed to get Music')
    //             }
    //         })
    // }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '70vh'
        }}>
            
            
            {/* <form style={{display: 'flex', flexDirection: 'column'}}
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
            </form> */}
        </div>
    )
}

export default withRouter(RegisterPage)
