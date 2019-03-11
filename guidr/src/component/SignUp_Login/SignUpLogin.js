import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';


export default class SignUpLogin extends React.Component {
    state = {
        login: true,
    }
    changeTo = () => {
        this.setState({ login: true });
    }

    render() {
        return (
            <div>
                <Route path='/login' render={() => <Login />} />
                <Route path='/sign-up' render={() => <SignUp />} />
            </div>
        )
    }
}