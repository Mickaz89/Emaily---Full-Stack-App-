import {FETCH_USER, OPEN_SIDEBAR} from "../actions/types";

const initialState = {
    openSidebar: {
        open: true,
    }
};

export default function(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case OPEN_SIDEBAR:{
            return {...state, openSidebar: {open: !state.openSidebar.open}}

        }
        default:
            return state;

    }
}
