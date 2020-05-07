import React from "react";
import styles from './styles/Dashboard.module.css'
import {Switch, Route, useRouteMatch, useParams,useLocation} from "react-router-dom";
import { connect } from "react-redux";
import UsersLayout from "./Users/UsersLayout";
import AntdSideMenu from './AntdSideMenu';
import './styles/Dashboard.css';
import DashboardLayout from "./DashboardLayout";
import Mail from "./Mail";

function Dashboard() {

    let { path } = useRouteMatch();
    return (
        <div>
            <Switch>
                <DashboardLayout>
                    <Route exact path={path}>

                    </Route>
                    <Route path={`${path}/users`}>
                       <UsersLayout/>
                    </Route>
                    <Route path={`${path}/mail`}>
                        <Mail/>
                    </Route>
                </DashboardLayout>
            </Switch>
        </div>
    );
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);
