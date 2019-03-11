import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../api';

function* step1() {
    try {
        yield put({ type: 'DATA_LOADED', payload: [] });
        const result = yield call(api.step1);
        yield put({ type: 'DATA_LOADED', payload: result.data.list });
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
}

function* step2(action) {
    try {
        yield put({ type: 'DATA_LOADED', payload: [] });
        const result = yield call(api.step2, action.payload);
        yield put({ type: 'DATA_LOADED', payload: result.data.list });
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
}

function* step3(action) {
    try {
        yield put({ type: 'DATA_LOADED', payload: [] });
        const result = yield call(api.step3, action.payload);
        yield put({ type: 'DATA_LOADED', payload: result.data.list });
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeEvery('LOAD_STEP_3', step3);
    yield takeEvery('LOAD_STEP_2', step2);
    yield takeEvery('LOAD_STEP_1', step1);
}

export default mySaga;
