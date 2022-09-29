import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isFetching:false,
  users:[],
  error:null
}

function userReducer(state=initialState, action){
  switch(action.type){
    case ACTION_TYPES.GET_USERS_REQUEST:{
      return {
        ...state,
        isFetching: true,
        error:null
      }
    }
    case ACTION_TYPES.GET_USERS_SUCCESS:{
      const {payload:{users:newUsers}} = action;
      return {
        ...state,
        isFetching:false,
        users:[...state.users, ...newUsers],
        error:null
      }
    }
    case ACTION_TYPES.GET_USERS_ERROR:{
      const {payload:{error}} = action;
      return {
        ...state,
        isFetching:false,
        error
      }
    }
    case ACTION_TYPES.CREATE_USER_REQUEST:{
      return {
        ...state,
        isFetching:true,
        error:null
      }
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS:{
      const {values:user} =action;
      return {
        ...state,
        isFetching:false,
        users: [...state.users, user],
        error:null
      }
    }
    case ACTION_TYPES.CREATE_USER_ERROR:{
      const {error} =action;
      return {
        ...state,
        isFetching:false,
        error
      }
    }
    default:return state;
  }
}

export default userReducer;