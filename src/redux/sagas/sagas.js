import { takeEvery, put, call } from "redux-saga/effects"
import { FETCH_POST, REQUEST_POSTS } from '../types'
import { hideLoader, showLoader, showAlert } from "../actions"

export function* sagaWatcher() {
	yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
	try {
		yield put(showLoader())
		const payload = yield call(fetchPost)
		yield put({ type: FETCH_POST, payload })
		yield put(hideLoader())
	} catch (e) {
		yield put(showAlert("Что-то пошло не так", 2000))
		yield put(hideLoader())
	}
}

async function fetchPost() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
	return await response.json()
}