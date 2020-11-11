/* eslint-disable no-constant-condition */

import { put, takeEvery, call } from 'redux-saga/effects'

export function fetchJokeApi() {
  return fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
}

type Joke = {
  "id": number;
  "type": string;
  "setup": string;
  "punchline": string;
}

export function* fetchJoke() {
  try {
    const joke: Joke = yield call(fetchJokeApi);
    yield put({
      type: 'ADD_TASK',
      title: joke.setup.concat('→', joke.punchline),
    });
  } catch (e) {
    // TODO 未実装
    yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

export default function* rootSaga() {
  yield takeEvery('JOKE_FETCH_REQUESTED', fetchJoke);
}
