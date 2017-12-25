import React, { Component } from 'react';

class User extends Component {
    state = {
        username : 'Ivan'
    }

    render() {
        return (
            <p> Username: {this.state.username} </p>
        )
    }
}

export default User