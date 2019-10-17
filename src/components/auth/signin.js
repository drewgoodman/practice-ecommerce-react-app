import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

export default class SignIn extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div className="sign-in">
              sign in
          </div>
      )
  }

  SignIn = reduxForm({
      form: 'SignIn'
  })(SignIn);

}