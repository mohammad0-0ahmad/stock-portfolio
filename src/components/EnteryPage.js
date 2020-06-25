import React from 'react'
import { useHistory, Switch, Route, Redirect } from "react-router-dom";
import '../css/EnteryPage.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ResetPasswordRequestForm from './ResetPasswordRequestForm'
import ResetPasswordForm from './ResetPasswordForm'

const EnteryPage = () => {
    const history = useHistory();

    return (
        <div id='EnteryPage'>
            <div>
                <Switch>
                    <Route path='/' exact={true} component={LoginForm}></Route>
                    <Route path='/register' exact={true} component={RegisterForm} />
                    <Route path='/reset-password' exact={true} component={ResetPasswordRequestForm} />
                    <Route path='/reset-password/:request' component={ResetPasswordForm} />
                    <Redirect to='/404' />
                </Switch>
                <div
                    className={history.location.pathname === '/' ? 'img leftSide' : 'img'}
                >
                </div>
            </div>
        </div>
    )
}

export default EnteryPage;