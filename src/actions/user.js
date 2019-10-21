import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                title: 'purchase 1',
                total: 19.40,
                orderNumber: "A002132423",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Drew Goodman',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                title: 'purchase 2',
                total: 19.40,
                orderNumber: "A002JT2426",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Drew Goodman',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                title: 'purchase 3',
                total: 19.40,
                orderNumber: "A0021asdl432",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Drew Goodman',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                title: 'purchase 4',
                total: 19.40,
                orderNumber: "A0021000gh2343",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Drew Goodman',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                title: 'purchase 5',
                total: 19.40,
                orderNumber: "A002132423rr343",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Drew Goodman',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                title: 'purchase 6',
                total: 19.40,
                orderNumber: "A002132320498rgo",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Drew Goodman',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                title: 'purchase 7',
                total: 19.40,
                orderNumber: "A002132423",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Drew Goodman',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                title: 'purchase 8',
                total: 19.40,
                orderNumber: "A002132423",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Drew Goodman',
                    shippingAddress: '1234 West State Street'
                }
            },
        ]
    })
}