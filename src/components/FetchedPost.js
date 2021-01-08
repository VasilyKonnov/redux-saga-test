import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Post from "./Post"
import { fetchPosts } from "../redux/actions"

export default () => {

	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts.fetchedPost)
	const loading = useSelector(state => state.app.loading)

	if (loading) {
		return <p>Идёт загрузка</p>
	}
	if (!posts.length) {
		return <button
			className="btn btn-primary"
			onClick={() => dispatch(fetchPosts())}
		>Загрузить</button>
	}

	return posts.map(post => <Post post={post} key={post.id} />)
}