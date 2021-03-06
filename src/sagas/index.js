import { fork } from 'redux-saga/effects';
import { watchLoginRequest } from 'sagas/login';
import { watchSignupRequest } from 'sagas/signup';
import { watchSession } from 'sagas/session';
import { usersRequest } from 'sagas/users';
import { watchMapRequest, watchLoadTrack } from 'sagas/map';
import { watchRouteRequest, watchLoadRouteRequest } from 'sagas/routes';

export default function* Root() {
  yield [
    fork(watchLoginRequest),
    fork(watchSignupRequest),
    fork(watchSession),
    fork(usersRequest),
    fork(watchMapRequest),
    fork(watchLoadTrack),
    fork(watchRouteRequest),
    fork(watchLoadRouteRequest),
  ];
}
