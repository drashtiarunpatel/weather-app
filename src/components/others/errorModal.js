import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

class ErrorModal extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={() => this.props.errorModalHandler(false)}>
                <Modal.Body>
                    Something went wrong!
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.errorModalHandler(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        showModal: state.showErrorModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        errorModalHandler: data => dispatch(actionType.errorModalHandler(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);