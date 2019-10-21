import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'Javascript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            },
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae recusandae dolore quae nostrum facilis nam, quam provident reprehenderit! Reprehenderit itaque suscipit incidunt sed, dicta fugiat modi nostrum, aut laborum nobis facilis.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae recusandae dolore quae nostrum facilis nam, quam provident reprehenderit! Reprehenderit itaque suscipit incidunt sed, dicta fugiat modi nostrum, aut laborum nobis facilis.',
                price: 1.99,
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae recusandae dolore quae nostrum facilis nam, quam provident reprehenderit! Reprehenderit itaque suscipit incidunt sed, dicta fugiat modi nostrum, aut laborum nobis facilis.',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae recusandae dolore quae nostrum facilis nam, quam provident reprehenderit! Reprehenderit itaque suscipit incidunt sed, dicta fugiat modi nostrum, aut laborum nobis facilis.',
                price: 1.99,
                belongsTo: [0, 2, 5]
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae recusandae dolore quae nostrum facilis nam, quam provident reprehenderit! Reprehenderit itaque suscipit incidunt sed, dicta fugiat modi nostrum, aut laborum nobis facilis.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae recusandae dolore quae nostrum facilis nam, quam provident reprehenderit! Reprehenderit itaque suscipit incidunt sed, dicta fugiat modi nostrum, aut laborum nobis facilis.',
                price: 1.99,
                belongsTo: [0, 2, 5]
            },
            {
                _id: 6,
                title: 'Advanced Object Oriented Programming',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae recusandae dolore quae nostrum facilis nam, quam provident reprehenderit! Reprehenderit itaque suscipit incidunt sed, dicta fugiat modi nostrum, aut laborum nobis facilis.',
                price: 1.99,
                belongsTo: [0, 6]
            },
        ]
    })
}