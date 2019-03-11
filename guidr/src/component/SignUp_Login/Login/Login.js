import React from 'react';
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
    state = {
        password: '',
        user: '',
    }
    onChangeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
            <div>
                <input placeholder="Name..." type="text" value={this.state.user} onChange={this.onChangeHandler} />
                <input placeholder="Password" type="password" value={this.state.password} onChange={this.onChangeHandler} />
                <button>Log in</button>
                < div >
                    <Link to="/sign-up" > You don't have an account ? Sign up here!</Link>
                </div>
            </div>
        )
    }
}