import {
    INC,
    INC_CUSTOM,
    DEC,
    RESET,
} from '../action-types';

const incAction = () => ({type: INC});
const decAction = () => ({type: DEC});
const resetAction = () => ({type: RESET});
const inCustomAction = (payload) => ({type: INC_CUSTOM, payload});

export {
    incAction,
    decAction,
    resetAction,
    inCustomAction,
}
