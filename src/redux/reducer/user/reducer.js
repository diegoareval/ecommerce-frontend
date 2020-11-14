import { LOGIN, SIGNIN_USER_SUCCESS, SIGNUP_USER_SUCCESS, BAD_REQUEST, LOAD_USER, 
  LOAD_USER_SUCCESS, SIGNOUT_USER, SIGNUP_USER, LOAD_USER_FAIL} from "./actionsTypes"

const initialState = {}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
     case LOGIN:
    case SIGNUP_USER:
      return { ...state, error: null, authenticated: false };

    case SIGNIN_USER_SUCCESS:
    case SIGNUP_USER_SUCCESS:
      return { ...state, error: null, username: action.payload, authenticated: true };

    case BAD_REQUEST:
      return { ...state, error: action.payload };

    case SIGNOUT_USER:
      return { ...state, error: null, username: null, authenticated: false };  

      case LOAD_USER:
      return { ...state, data: {} };

    case LOAD_USER_SUCCESS:
      return { ...state, data: action.payload, error: null,  messsage: null };

    case LOAD_USER_FAIL:
      return { ...state, error: action.payload, messsage: null };


    default:
      return state;
  }
}