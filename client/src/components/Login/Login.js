import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchUser} from "../../actions";


class Login extends Component {
    render() {

        const onClick = () => {
          console.log("ONCLICK LOGIN");

        };

        return (
            <div>
                <h1>Login</h1>
                <a href="/auth/google" onClick={onClick}>Login With Google</a>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser())
});
export default connect(null,mapDispatchToProps)(Login);
