import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Ashwarya</div>
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Ashwarya</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Ashwarya</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
        // let message;
        // if(this.state.isLoggedIn) {
        //     message = 'Welcome Ashwarya';
        // } else {
        //     message = 'Welcome Guest';
        // }

        // return <div>{message}</div>
    }
}

export default UserGreeting
