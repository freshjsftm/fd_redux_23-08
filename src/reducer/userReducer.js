import produce from "immer";
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isFetching:false,
  users:[],
  error:null
}

const handlerRequest = produce((draftState, action)=>{
  draftState.isFetching=true;
  draftState.error = null;
})
const handlerError = produce((draftState, action)=>{
  draftState.isFetching=false;
  draftState.error = action.payload.error;
})  

const handlers = {
  [ACTION_TYPES.GET_USERS_REQUEST]:handlerRequest,
  [ACTION_TYPES.CREATE_USER_REQUEST]:handlerRequest,
  [ACTION_TYPES.GET_USERS_ERROR]:handlerError,
  [ACTION_TYPES.CREATE_USER_ERROR]:handlerError,  
  [ACTION_TYPES.GET_USERS_SUCCESS]:produce((draftState, action)=>{
    const {payload:{users:newUsers}} = action;
    draftState.isFetching=false;
    draftState.error = null;
    draftState.users.push(...newUsers);
  }),
  [ACTION_TYPES.CREATE_USER_SUCCESS]:produce((draftState, action)=>{
    const {payload:{user}} = action;
    draftState.isFetching=false;
    draftState.error = null;
    draftState.users.push(user);
  }),
}

function userReducer(state=initialState, action){
  const {type} = action;
  const handler = handlers[type];
  if(handler){
    return handler(state, action);
  }
  return state;
}
export default userReducer;