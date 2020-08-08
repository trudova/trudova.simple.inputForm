import React, { Component } from 'react'


export class Confirm extends Component {
    render() {
        const{values:{firstName,lastName,email, occupation,city,bio}} =this.props;
        return (
            <div>
                <ul>
        <li> First name: {firstName}</li>
        <li> Last name: {lastName}</li>
        <li> Email: {email}</li>
        <li> Occupation: {occupation}</li>
        <li> City: {city}</li>
        <li> Bio: {bio}</li>
                </ul>
                <br/> 
            </div>
        )
    }
}

export default Confirm
