import React from 'react';
import {Router , Route, Switch, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Login from "./components/Login/Login";
import PrivateRoute from './modules/routes/PrivateRoute'
import * as actions from './actions/index';
import './components/styles/App.css';
import DashboardLayout from "./components/DashboardLayout";


class App extends React.Component  {


    componentDidMount() {
        console.log('didMount');
        this.props.fetchUser();
    }
    render() {
        console.log('AUTH' , this.props.auth);
    if(this.props.auth.loading){
        return <h1>Loading</h1>
    }
            return (
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={this.props.auth ? '/dashboard' : '/login'}/>}/>
                    <PrivateRoute exact path="/dashboard" ><DashboardLayout/></PrivateRoute>
                    <Route exact path="/login" component={Login} />
                </Switch>

            );

    }

};

function mapStateToProps({ auth }) {
    return { auth };
}

export default withRouter( connect(mapStateToProps, actions)(App));