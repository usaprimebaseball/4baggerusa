import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const EnrollAlertModal = ({ show, setShowModal, history }) => {
    const goToLogin = () => {
        history.push(`/auth/login`)
    };
    return (
        <Modal show={show} >
            <ModalHeader>
                <ModalTitle>You need to Login as a team in order to Enroll in this tournament.</ModalTitle>
            </ModalHeader>
            <ModalFooter>
                <button type="button" className="btn btn-success" onClick={() => goToLogin()}>Login</button>
                <button type="button" className="modal-close btn btn-secondary" onClick={() => setShowModal(false)}>close</button>
            </ModalFooter>
        </Modal>
    );
};

export default EnrollAlertModal;