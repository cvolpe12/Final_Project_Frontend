import React from 'react'
import { Link } from "react-router-dom";
import { Form, Button } from 'semantic-ui-react'
import { connect } from "react-redux"

class SignUpForm extends React.Component {
  state = {
		name: "",
		username: "",
    email: "",
		password: "",
		passwordConfirmation: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	createUser = () => {
		fetch("http://localhost:3000/api/v1/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify({
        username: this.state.username,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
		})
		.then(res => res.json())
		.then((response) => {
      console.log(response);
			if (response.errors){
				alert(response.errors)
			} else {
        this.props.setCurrentUser(response.user)
				this.props.history.push(`/users/${response.user.id}`)
			}
		})
	}

	handleSubmit = () => {
		if(this.state.password === this.state.passwordConfirmation){
			this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}

	render(){
		return (
      <div>
        <h1>FanBall</h1>
        <h3>Create Account</h3>
        <div>
    			<Form onSubmit={this.handleSubmit}>
    		    <Form.Field>
    		      <label>Username</label>
    		      <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
    		    </Form.Field>
    		    <Form.Field>
    		      <label>Name</label>
    		      <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='Name' />
    		    </Form.Field>
    		    <Form.Field>
    		      <label>Email</label>
    		      <input onChange={this.handleChange} name="email" value={this.state.email} placeholder='Email' />
    		    </Form.Field>
    		    <Form.Field>
    		      <label>Password</label>
    		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
    		    </Form.Field>
    		    <Form.Field>
    		      <label>Password Confirmation</label>
    		      <input onChange={this.handleChange} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder='Password Confirmation' />
    		    </Form.Field>
    		    <Button type='submit'>Submit</Button>
    		  </Form>
          <br/>
          <br/>
          <Link to={`/`}>
            <Button type='submit'>Login</Button>
          </Link>
        </div>
      </div>
		)
	}
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    setCurrentUser: (user) => {dispatch({type: "SET_CURRENT_USER", payload: user })}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
