import React from 'react'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'

function RightMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="search">
                <a href="/music/search">Search</a>
            </Menu.Item>
            <Menu.Item key="music">
                <a href="/music">Music</a>
            </Menu.Item>
            <Menu.Item key="mypage">
                <a href={`/mypage`}>Mypage</a>
            </Menu.Item>
            <Menu.Item key="login">
                <a href="/login">Signin</a>
            </Menu.Item>
            <Menu.Item key="register">
                <a href="/register">Signup</a>
            </Menu.Item>
        </Menu>
    )
}

export default withRouter(RightMenu)