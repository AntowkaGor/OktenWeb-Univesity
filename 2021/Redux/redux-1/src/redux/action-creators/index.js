import {
    INC,
    INC_CUSTOM,
    DEC,
    RESET,
    INC_TWO,
    INC_CUSTOM_TWO,
    DEC_TWO,
    RESET_TWO,
    ON_USERS_LOADED,
    ON_ADD_TO_DELATE, ON_REMOVE_FROME_DELATE,
} from '../action-types';

const incAction = () => ({type: INC });
const incAction2 = () => ({type: INC_TWO});
const decAction = () => ({type: DEC});
const decAction2 = () => ({type: DEC_TWO});
const resetAction = () => ({type: RESET});
const resetAction2 = () => ({type:RESET_TWO});
const inCustomAction = (payload) => ({type: INC_CUSTOM, payload});
const inCustomAction2 = (payload) => ({type: INC_CUSTOM_TWO, payload});

const onUsersLoaded = (payload) => ({type: ON_USERS_LOADED, payload});
const onAddtoDelate = (payload) => ({type: ON_ADD_TO_DELATE, payload});
const onRemoveFromDelate = (payload) => ({type: ON_REMOVE_FROME_DELATE, payload});
export {
    incAction,
    decAction,
    resetAction,
    inCustomAction,
    incAction2,
    decAction2,
    resetAction2,
    inCustomAction2,
    onUsersLoaded,
    onAddtoDelate,
    onRemoveFromDelate,
}

export * from './cart-action-creators';
export * from './wishlist-action-creators';
export * from './products-action-creators';

