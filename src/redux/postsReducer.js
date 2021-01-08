import { CREATE_POST, FETCH_POST } from "./types"
const initialState = {
	posts: [],
	fetchedPost: []
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_POST: {
			return { ...state, posts: state.posts.concat([action.payload]) }
		}
		case FETCH_POST: {
			return { ...state, fetchedPost: action.payload }
		}
		default:
			return state
	}

}
export default postsReducer;