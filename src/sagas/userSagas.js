import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as ActionsUser from '../actions/actionsUser';

export function* createUserSaga(action){
  try {
    const {data: {data: [user]}} = yield API.createUser(action.values);
    yield put(ActionsUser.createUserSuccess(user));
  } catch (error) {
    yield put(ActionsUser.createUserError(error));
  }
}