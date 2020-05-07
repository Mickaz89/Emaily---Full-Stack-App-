import { CLOSE_MODAL, OPEN_MODAL} from "../actions/types";

const initialState = {
    open: false

};

export default function(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case OPEN_MODAL:{
            return {...state, open: true}

        }
        case CLOSE_MODAL:{
            return {...state, open: false}

        }
        default:
            return state;

    }
}
