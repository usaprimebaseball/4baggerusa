import React from "react";
import { useDispatch } from "react-redux";
import { updateactivity } from 'actions/user';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const UpdateActivityModal = ({active, show, setShowModal, user, history}) => {
    const dispatch = useDispatch();

    return (
        <Modal show={show} >
            <ModalHeader>
                <ModalTitle>{user.active ? "Please confirm you want to Deactivate this account."  : "Please confirm you want to Activate this account."}</ModalTitle>
            </ModalHeader>
            <ModalFooter>
                {user.active ?
                <button type="button" className="btn btn-danger" onClick={() => dispatch(updateactivity(user._id, {...user, active:false}, history))}>CONFIRM</button>
                    :
                <button type="button" className="btn btn-danger" onClick={() => dispatch(updateactivity(user._id, {...user, active:true}, history))}>CONFIRM</button>
                }
                <button type="button" className="modal-close btn btn-secondary" onClick={() => setShowModal(false)}>close</button>
            </ModalFooter>
        </Modal>
    );
};

export default UpdateActivityModal;