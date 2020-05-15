import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Table, Button, Modal, Alert } from 'react-bootstrap';

import * as actionType from '../../store/actions';


class Favorites extends Component {
    render() {
        return (
            <div className="sitebar fav-list-table">
                {this.props.favCityList.length !== 0 ?
                    <Table responsive striped bordered hover size="lg">
                        <thead>
                            <tr>
                                <td>#</td>
                                <th>City Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.favCityList.map((data,index) => (
                                <tr key={data.cityKey}>
                                    <td>{index+1}</td>
                                    <td>{data.cityName}</td>
                                    <td><Button
                                    variant="danger"
                                        onClick={() => this.props.saveSelectedKey(data.cityKey)}>
                                        {/*  onClick={() => this.props.removeFromFav(data.cityKey, this.props.favCityList)}> */}
                                        Remove</Button>
                                        <Modal show={data.cityKey === this.props.selectedCityKey} onHide={() => this.props.saveSelectedKey(null)}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Remove Item From Favorites</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Are you sure you want to delete {data.cityName} from the list?</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary"
                                                    onClick={() => this.props.saveSelectedKey(null)}>
                                                    No
                                            </Button>
                                                <Button variant="success"
                                                    onClick={() => this.props.removeFromFav(data.cityKey, this.props.favCityList)}>
                                                    Yes
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    : <Alert variant="dark">
                        <Alert.Heading>No Favorite added yet</Alert.Heading>
                        <p>To add location to the favorite list, go to home.</p>
                        <hr />
                        <Button variant="dark">
                            <NavLink to='/' exact >Home</NavLink>
                        </Button>
                    </Alert>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favCityList: state.favCityList,
        selectedCityKey: state.selectedCityKey
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeFromFav: (cityKey, favCityList) => dispatch(actionType.updateFavCityList(cityKey, favCityList)),
        saveSelectedKey: cityKey => dispatch(actionType.saveSelectedKey(cityKey))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);