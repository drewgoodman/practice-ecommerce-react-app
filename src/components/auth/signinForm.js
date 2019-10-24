import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';
import Details from '../details';


class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create an account here.',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('forgot account')
            },
            {
                _id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('forgot email')
            }
        ];
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field
                    className='sign-in-form__email'
                    type='email'
                    title='E-mail'
                    placeholder='email'
                    name='email'
                    component={FormInput} />
                <Field
                    className='sign-in-form__password'
                    type='password'
                    title='Password'
                    placeholder='password'
                    name='password'
                    component={FormInput} />
                <div className="sign-in-form__line"></div>
                <Field
                    className='sign-in-form__login'
                    // onClick={() => history.push('/account')}
                    type='submit'
                    title='Login'
                    name='login'
                    component={FormButton} />
                <Details className="sign-in-form__details" title="QuickLinks" links={links} />
            </form>
        )
    }


}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;