import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentid: '',
            password: ''
        }
    }

    onChange = e => {
        e.preventDefault()

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()

        const userExists = this.props.database.find(x => x.studentid === this.state.studentid)

        if (userExists) {
            if (userExists.password === this.state.password) {
                alert(`Welcome, ${userExists.fn}!`)
            } else {
                alert('Wrong password')
            }
        } else {
            alert('Invalid credentials')
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="box">
                        <input type="text" name="studentid" onChange={this.onChange} placeholder="Student number" pattern="[0-9]{10}" maxLength={10} required />
                    </div>
                    <div className="box">
                        <input type="password" name="password" onChange={this.onChange} placeholder="password" required />
                    </div>
                    <input type="submit" className="btn" value="Login" />
                    <input type="reset" className="btn" value="Cancel" style={{backgroundColor: 'white', color: 'black'}}/>
                </form>
                <a onClick={() => this.props.setPage('register')} className="b2">Create Account</a>
            </div>
        )
    }
}

export default Login

