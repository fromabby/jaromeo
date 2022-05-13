import React, { Component } from 'react'

export class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentid: '',
            fn: '',
            mn: '',
            ln: '',
            college: '',
            program: '',
            year: '',
            password: '',
            cpassword: ''
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

        if (!userExists) {
            if (this.state.password === this.state.cpassword) {
                alert(`Your details are being saved..`)
                this.props.updateDatabase([...this.props.database, this.state])
                alert(`${this.state.studentid} added!`)
                this.props.setPage('login')
            } else {
                alert('Passwords do not match')
            }
        } else {
            alert(`${this.state.studentid} already exists.`)
        }
    }

    render() {
        return (
            <div className="r-container">
                <h1>Register</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="box">
                        <input type="text" name="studentid" onChange={this.onChange} placeholder="Student number" pattern="[0-9]{10}" maxLength={10} required />
                    </div>
                    <div className="box">
                        <input type="text" name="fn" onChange={this.onChange} placeholder="First name" required />
                    </div>
                    <div className="box">
                        <input type="text" name="mn" onChange={this.onChange} placeholder="Middle name" required />
                    </div>
                    <div className="box">
                        <input type="text" name="ln" onChange={this.onChange} placeholder="Last name" required />
                    </div>
                    <div className="box">
                        <input type="text" name="college" onChange={this.onChange} placeholder="College" required />
                    </div>
                    <div className="box">
                        <input type="text" name="program" onChange={this.onChange} placeholder="Program" required />
                    </div>
                    <div className="box">
                        <input type="text" name="year" onChange={this.onChange} placeholder="Year Level" required />
                    </div>
                    <div className="box">
                        <input type="password" name="password" onChange={this.onChange} placeholder="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required />
                    </div>
                    <div className="box">
                        <input type="password" name="cpassword" onChange={this.onChange} placeholder="Confirm password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required />
                    </div>
                    <input type="submit" className="btn" value="Register" />
                    <input type="reset" className="btn" value="Cancel" style={{ backgroundColor: 'white', color: 'black' }} />
                </form>
                <a onClick={() => this.props.setPage('login')} className="r-b2">Already have an account?</a>
            </div>
        )
    }
}

export default Registration
