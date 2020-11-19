import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../styles/registermodal.scss";

export const Registermodal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const CreateAccountForm = props => {
		const { store, actions } = useContext(Context);
		const [username, setUsername] = useState("");
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		const [location, setLocation] = useState("");
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Join
			</Button>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicusername">
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" />
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" />
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" />
							<Form.Label>Location</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button className="Save-register" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};