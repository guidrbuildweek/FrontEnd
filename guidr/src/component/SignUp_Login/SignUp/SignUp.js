import React from 'react';
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
    state = {
        user: '',
        email: '',
        age: '',
        typeOfGuide: '',
        password: '',

    }
    onChangeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                <input placeholder="Name..." type="text" name="user" value={this.state.user} onChange={this.onChangeHandler}/>
                <input placeholder="email" type = "email" name="email" value = {this.state.email} onChange={this.onChangeHandler}/>
                < input type="number" placeholder="Age..." name="age" onChange={this.onChangeHandler}/>
                <select type="select" name="typeOfGuide" onClick={this.onChangeHandler}>
                    <option value="professional">Professional</option>
                    <option defaultValue value="private">Private</option>
                </select>
                <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                <button>Sign up</button>
                <div>
                    <Link to="/login">You already have an account?</Link>
                </div>

            </div>
        )
    }
}