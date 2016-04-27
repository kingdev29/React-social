import React from 'react';
import ReactDom from 'react-dom';

var UserList = React.createClass({
	render: function() {
		return (
			<div className="users">
				<h3>Online Users</h3>
				<ul>
					{
						this.props.users.map((user, i) => {
							return (
								<li key={i}>
									{user}
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
});

export default UserList;