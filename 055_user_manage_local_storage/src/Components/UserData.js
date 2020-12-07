import React, { Component } from 'react';

class UserData extends Component {
    checkPermission = () => {
        if(this.props.permission === 1) {
            return "Admin"
        } else if(this.props.permission === 2) {
            return "Modrator"
        } else {
            return "Normal"
        }
    }

    EditUserData = () => {
        this.props.changeShowFormEditUser()
        this.props.getEditUserData();
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.stt}</th>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>
                    {
                        this.checkPermission()
                    }
                </td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={() => this.EditUserData()} type="button" className="btn btn-warning"><i className="fa fa-edit" /> Sửa</button>
                        <button onClick={() => this.props.deleteUserData()} type="button" className="btn btn-danger"><i className="fa fa-trash" /> Xóa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default UserData;