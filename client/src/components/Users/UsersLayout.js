import React from "react";
import { List, Avatar, Button, Skeleton } from 'antd';
import './styles/UsersLayout.module.css';
import styles from './styles/UsersLayout.module.css';
import {useParams} from "react-router-dom";

function UsersLayout() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h1>Users</h1>
        </div>
    );
}

export default UsersLayout;