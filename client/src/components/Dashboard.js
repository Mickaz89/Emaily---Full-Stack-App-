import React from "react";
import styles from './styles/Dashboard.module.css'
import {Switch, Route, useRouteMatch} from "react-router-dom";
import { connect } from "react-redux";
import UsersLayout from "./Users/UsersLayout";
import AntdSideMenu from './AntdSideMenu';
import './styles/Dashboard.css';

function Dashboard() {

    let { path } = useRouteMatch();
    return (
        <div className='root'>
            <Switch>
                <Route path={`${path}/users`}>
                    <UsersLayout/>
                </Route>
            </Switch>
        </div>
    );
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);
