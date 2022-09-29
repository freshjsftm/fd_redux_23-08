import ACTION_TYPES from './actionTypes';

export const getUsersRequest = ({limit, offset }) => ({
  type:ACTION_TYPES.GET_USERS_REQUEST,
  payload: {limit, offset}
})
export const getUsersSuccess = ({users}) => ({
  type:ACTION_TYPES.GET_USERS_SUCCESS,
  payload: {users}
})
export const getUsersError = ({error}) => ({
  type:ACTION_TYPES.GET_USERS_ERROR,
  payload: {error}
})

export const createUserRequest = (values) => ({
  type:ACTION_TYPES.CREATE_USER_REQUEST,
  values
})

export const createUserSuccess = (values) => ({
  type:ACTION_TYPES.CREATE_USER_SUCCESS,
  values
})

export const createUserError = (error) => ({
  type:ACTION_TYPES.CREATE_USER_ERROR,
  error
})