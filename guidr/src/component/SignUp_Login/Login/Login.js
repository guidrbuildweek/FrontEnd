import React from 'react';

export default class Login extends React.Component {
    state = {
        password: '',
        user: '',
    }
    render() {
        return (
            <div>
                <input placeholder="Name..." type="text" value={this.state.user} />
                <input placeholder="Password" type="password" value={this.state.password} />
                <button></button>
            </div>
        )
    }
}