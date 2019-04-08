import React from "react";
import { Form, Button } from 'semantic-ui-react'
import { connect } from "react-redux"

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  handleSubmit = e => {
    fetch("http://localhost:3000/api/v1/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
		})
		.then(res => res.json())
    .then((response) => {
      console.log(response);
			if (response.errors) {
				alert(response.errors)
			} else {
					// we need to login at the top level where we are holding our current user!
					// setState in App to currentuser
					this.props.setCurrentUser(response.user)
					localStorage.setItem('jwt', response.jwt)
					// this.props.history.push(`/users/${response.user.id}`)
				}
			})
	}


  render() {
    return (
      <div>
        <h1>FanBall</h1>

        <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input name="username" value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>

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
    setCurrentUser: (user) => {dispatch({type: "SET_CURRENT_USERE", payload: user })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)