import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers';
import {INC_CUSTOM,
INC,
DEC,
RESET,
} from "./action-types";

const logger = (store) => (next) => (action) => {
    console.log(action);
    const result = next(action);

    console.log('next state', store.getState())
    return result
}

const persister = (store) => (next) => (action) => {
    next(action)

    const {wishlist, cart} = store.getState();
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    localStorage.setItem('cart', JSON.stringify(cart))

}

const protectCounter = (store) => (next) => (action) => {
    const actionForCounter = [ INC,
        INC_CUSTOM,
        DEC,
        RESET,
    ]

    const {isAllowedToChange} = store.getState().counter1

    if(!isAllowedToChange && actionForCounter.includes(action.type)){
        console.log('you`re not allowed to modify counter');
        return
    }

    next(action)

    const {wishlist, cart} = store.getState();
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    localStorage.setItem('cart', JSON.stringify(cart))

}

const middlewares = [thunk, protectCounter, logger, persister];

export const store = createStore(
    reducer,
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

