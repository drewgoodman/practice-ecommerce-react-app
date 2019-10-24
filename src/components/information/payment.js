import React, { Component } from 'react';
import PageTitle from '../pageTitle';


import { connect } from 'react-redux';
import * as actions from '../../actions';

import PaymentForm from './paymentForm';

class Payment extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }


    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="payment">
                <PageTitle className='payment__page-title' title='Payment Information' />
                <PaymentForm className='payment__form' onSubmit={this.onSubmit} name={this.props.name} address={this.props.address} />
            </div>
        )
    }

}


function mapStateToProps(state) {
    const { name, address } = state.user.user;
    return { name, address }
}

Payment = connect(mapStateToProps, actions)(Payment);
export default Payment;