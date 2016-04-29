import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentList">
				<h1>Comments</h1>
				<CommentList = data={this.props.data} />
				<CommentForm />
			</div>
		);
	}
});

export default CommentBox;