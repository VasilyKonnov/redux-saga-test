import { CREATE_POST, FETCH_POST, SHOW_LOADER, HIDE_LOADER, HIDE_ALERT, SHOW_ALERT, REQUEST_POSTS } from './types'

export function createPost(post) {
	return {
		type: CREATE_POST,
		payload: post
	}
}

export function showLoader() {
	return {
		type: SHOW_LOADER
	}
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
}

export function hideAlert() {
	return {
		type: HIDE_ALERT
	}
}

export function showAlert(text, timeout = 1500) {
	return dispatch => {
		dispatch({
			type: SHOW_ALERT,
			payload: text
		})

		setTimeout(() => {
			dispatch(hideAlert())
		}, timeout);
	}
}


export function fetchPosts() {

	return {
		type: REQUEST_POSTS
	}

	// return async dispatch => {
	// 	try {
	// 		dispatch(showLoader());
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
	// 		const json = await response.json()

	// 		setTimeout(() => {
	// 			dispatch({ type: FETCH_POST, payload: json })
	// 			dispatch(hideLoader())
	// 		}, 500);
	// 	}
	// 	catch (e) {
	// 		dispatch(showAlert("Что-то пошло не так", 2000))
	// 		dispatch(hideLoader())
	// 	}
	// }
}