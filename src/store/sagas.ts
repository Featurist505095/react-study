import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, LOAD_DATA_BY_GENRE, LOAD_DATA_BY_ID, putData, putDataByGenre, putDataById } from './actionCreators';

const fetchData = (url: string) => {
    return fetch(url)
      .then(response => response.json());
}

function* workerLoadData(data: any) {
    const gotData = yield call(fetchData, data.payload);

    yield put(putData(gotData));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData);
}

function* workerLoadDataById(data: any) {
    const gotData = yield call(fetchData, data.payload);

    yield put(putDataById(gotData));
}

export function* watchLoadDataById() {
    yield takeEvery(LOAD_DATA_BY_ID, workerLoadDataById)
}

function* workerLoadDataByGenre(data: any) {
    const gotData = yield call(fetchData, data.payload);

    yield put(putDataByGenre(gotData));
}

export function* watchLoadDataByGenre() {
    yield takeEvery(LOAD_DATA_BY_GENRE, workerLoadDataByGenre)
}
export default watchLoadData;