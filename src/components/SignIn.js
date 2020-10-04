import React, { Component } from 'react';
import { AUTH_TOKEN } from '../constants';
import { gql } from '@apollo/client';
import { Mutation } from "@apollo/client/react/components";
import { Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addAlert } from '../store/actionCreators/addAlert';

const SIGN_IN_MUTATION = gql`
    mutation SignIn($email: String!, $password: String!) {
        signin(email: $email, password: $password) {
            accessToken
        }
    }
`

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    const {email, password} = this.state
    return (
      <Col md="4">
        <h4>Sign In</h4>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={e => this.setState({email: e.target.value})}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                          placeholder="Password"
                          value={password}
                          onChange={e => this.setState({password: e.target.value})}
            />
          </Form.Group>
          <Mutation
            mutation={SIGN_IN_MUTATION}
            variables={{email, password}}
            onCompleted={data => this._confirm(data)}
            onError={error => this._addError(error.message)}
          >
            {mutation => (
              <Button variant="primary" onClick={mutation}>
                Submit
              </Button>
            )}
          </Mutation>
        </Form>
      </Col>
    )
  }

  _addError = message => {
    this.props.dispatch(addAlert(message, "danger"));
  }

  _confirm = async data => {
    const {token} = data.signin
    this._saveUserData(token)
    this._addSuccessfulLoginMessage()
    this.props.history.push(`/`)
  }

  _addSuccessfulLoginMessage = () => {
    this.props.dispatch(addAlert("Successful Login", "success"));
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default connect()(SignIn);