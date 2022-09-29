import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as ActionsUser from '../actions/actionsUser';

export function* deleteUserSaga(action){
  try {
    const {data:{data:user}} = yield API.deleteUser(action.payload.id)
    yield put(ActionsUser.deleteUserSuccess({user}))
  } catch (error) {
    yield put(ActionsUser.deleteUserError({error}))
  }
}

export function* createUserSaga(action){
  try {
    const {data: {data: [user]}} = yield API.createUser(action.payload.values);
    yield put(ActionsUser.createUserSuccess({user}));
  } catch (error) {
    yield put(ActionsUser.createUserError({error}));
  }
}
export function* getUsersSaga(action){
  try {
    const {data:{data:users}}= yield API.getUsers(action.payload);
    yield put(ActionsUser.getUsersSuccess({users}));
  } catch (error) {
    yield put(ActionsUser.getUsersError({error}));
  }
}