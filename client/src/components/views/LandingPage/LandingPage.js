import React from 'react'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {
    return (
        // body css
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '70vh'
        }}>
            <h2>시작 페이지</h2>

        </div>
    )
}

export default withRouter(LandingPage)