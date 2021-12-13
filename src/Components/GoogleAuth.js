import React from "react";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"877582752433-gkcjsrl2630hbjlin8k4u4ardn88nq60.apps.googleusercontent.com",
					scope: "email",
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					//runs for the first time when app loads
					this.onAuthChange(this.auth.isSignedIn.get());
					//to register the sign in and out status changes
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	// to check if user is signed in or not
	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};
	render() {
		return (
			<div>
				{this.props.isSignedIn === null ? null : this.props.isSignedIn ===
				  true ? (
					<button
						className="ui red google button"
						onClick={() => this.auth.signOut()}
					>
						<i className="google icon" />
						Sign Out
					</button>
				) : (
					<button
						className="ui green google button"
						onClick={() => this.auth.signIn()}
					>
						<i className="google icon" />
						Sign In with Google
					</button>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
