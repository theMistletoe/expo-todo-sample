/* eslint-disable no-constant-condition */
import { put, takeEvery, call } from 'redux-saga/effects'

export function fetchBuzzWordApi() {
  return fetch('https://corporatebs-generator.sameerkumar.website/')
    .then(response => response.json())
}

type BuzzWord = {
  "phrase": string;
}

export function* fetchBuzzWord() {
  try {
    const buzzWord: BuzzWord = yield call(fetchBuzzWordApi);
    yield put({
      type: 'ADD_TASK',
      title: buzzWord.phrase,
    });
  } catch (e) {
    // TODO 未実装
    yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

export default function* rootSaga() {
  yield takeEvery('ADD_TASK_FROM_API', fetchBuzzWord);
}
