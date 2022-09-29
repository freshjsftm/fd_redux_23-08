import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as ActionsUser from '../actions/actionsUser';

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