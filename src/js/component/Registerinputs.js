import React from "react";
import Form from "react-bootstrap/Form";

export const InputRegister = () => {
	return (
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
			</Form.Group>
		</Form>
	);
};
