import React from "react"
import { connect } from "react-redux"
import { createPost, showAlert } from './../redux/actions';
import Alert from "./Alert/Alert";

class PostForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: ""
		}
	}

	submitHandler = event => {
		event.preventDefault()
		const { title } = this.state;
		if (!title.trim()) {
			return this.props.showAlert("Название поста не может быть пустым", 1300)
		}
		const newPost = {
			title, id: Date.now.toString()
		}
		this.props.createPost(newPost)
		this.setState({
			title: ""
		})
	}
	changeInputHandler = event => {
		event.persist();
		this.setState(prev => ({
			...prev, ...{
				[event.target.name]: event.target.value
			}
		}))
	}

	render() {
		return (
			<div className="mb-5">
				<h1>Post Form</h1>
				<form onSubmit={this.submitHandler}>
					{this.props.alert && <Alert text={this.props.alert} />}
					<div className="form-group mb-3">
						<label className="form-control-label" htmlFor="exampleCheck1">Title Post</label>
						<input
							type="text"
							className="form-control"
							id="exampleCheck1"
							value={this.state.title}
							name="title"
							onChange={this.changeInputHandler}
						/>
					</div>
					<button type="submit" className="btn btn-success">Submit</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	alert: state.app.alert
})
const mapDispatchToProps = {
	createPost, showAlert
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
