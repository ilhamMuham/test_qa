import {
    SET_USER_INFO,
} from '../../action'

const initialState = {
    userInfo : {},
}

const loginReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case SET_USER_INFO: {
            return { ...state,
                userInfo: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default loginReducer
