import React, { Component } from "react";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		console.log({email, password});
		// need to do something to log user in
		this.props.signinUser({ email, password });
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Sorry partner.</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { email, password }} = this.props;
		// this is the same as:
		// const email = this.props.fields.email;
		// const password = this.props.fields.password;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="col-md-6 col-md-offset-3">
				<fieldset className="form-group">
					<label>Email: </label>
					<input {...email} className="form-control" />
				</fieldset>

				<fieldset className="form-group">
					<label>Password: </label>
					<input {...password} type="password" className="form-control" />
				</fieldset>

				{this.renderAlert()}

				<button action="submit" className="btn btn-primary pull-right">Sign In</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: "signin",
	fields: ["email", "password"]
}, mapStateToProps, actions)(Signin);