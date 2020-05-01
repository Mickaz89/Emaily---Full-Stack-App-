import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Redirect, Route,  } from "react-router-dom";
import {fetchUser} from "../../actions";


const PrivateRoute = ({children, auth, ...rest}) => {


    const checkToken = (location) => {

        console.log("SignedIn", auth);
        if(auth) {
            return children;
        }
        else {
            return <Redirect to={{pathname: '/login', state: {from : location}}}/>
        }

    };

    return <Route
        {...rest}
        render={({location}) => checkToken(location)}
    />;
};


function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, null)(PrivateRoute)
