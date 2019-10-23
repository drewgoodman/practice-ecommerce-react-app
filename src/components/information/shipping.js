import React, { Component } from 'react';

// import SignInForm from './signinForm';
import PageTitle from '../pageTitle';


import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shipping extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }


    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="sign-in">
                <PageTitle className='sign-in__page-title' title='Shipping Address' />
                {/* <ShippingForm className='sign-in__form' onSubmit={this.onSubmit} /> */}
            </div>
        )
    }

}

Shipping = connect(null, actions)(Shipping);
export default Shipping;