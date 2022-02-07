import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const UserModal = (props) => {
    return (
        <Modal show={props} >
        <ModalHeader>
            <ModalTitle>Account Details</ModalTitle>
        </ModalHeader>
        <ModalBody>
            
        </ModalBody>
        <ModalFooter>
            <button type="button" className="btn btn-secondary" show={false}>OK</button>
        </ModalFooter>
        </Modal>
    );
};

export default UserModal;