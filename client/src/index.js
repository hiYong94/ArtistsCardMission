import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from "react-router-dom"

import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'

import 'antd/dist/antd.css'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
            )}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)

serviceWorker.unregister()
