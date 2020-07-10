import React, { Suspense } from 'react'
import { Route, Switch } from "react-router-dom"

import LandingPage from "./views/LandingPage/LandingPage"
import LoginPage from "./views/LoginPage/LoginPage"
import RegisterPage from "./views/RegisterPage/RegisterPage"
import NavBar from "./views/NavBar/NavBar"
import Footer from "./views/Footer/Footer"
import MusicListPage from "./views/MusicListPage/MusicListPage"
import MusicRegisterPage from "./views/MusicRegisterPage/MusicRegisterPage"
import MusicUpdatePage from "./views/MusicUpdatePage/MusicUpdatePage"

function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
        <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/music" component={MusicListPage} />
                    <Route exact path="/music/register" component={MusicRegisterPage} />
                    <Route exact path="/music/update/:musicId" component={MusicUpdatePage} />
                </Switch>
            </div>
        <Footer />
        </Suspense>
    )
}

export default App
