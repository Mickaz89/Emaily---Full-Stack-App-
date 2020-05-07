import { Button, notification, Icon as AntIcon } from 'antd';
import Icon from "../../components/UI/Icon";
import React from "react";
import styles from './notifications.module.css'
import IconButton from "../../components/UI/IconButton";
import {CircularProgress} from "@material-ui/core";

export const openNotification = (message, icon, key = `open${Date.now()}`, duration) => {

    const btn = <IconButton onClick={() => notification.close(key)}>
        <Icon className={styles.close} icon={'delete'} color={'white'} size={25}/>
    </IconButton>;

    notification.open({
        key,
        message,
        icon,
        className: styles.root,
        btn,
        duration
    });
};

export const openInProgressNotification = (message, key) => {
    const icon = <CircularProgress classes={{root : styles.icon}} size={18} svg={{fill: 'white'}}/>;

    openNotification(message, icon, key, )
};

export const openSuccessNotification = (message, key) => {
    const icon = <Icon icon={'valid'} size={18} color={'white'} className={styles.icon}/>;

    openNotification(message, icon, key)
};

export const openErrorNotification = (message, key) => {
    const icon = <Icon icon={'warning'} size={18} color={'white'} className={styles.icon}/>;

    openNotification(message, icon, key)
};

export const closeNotification = (key) => {
    notification.close(key)
};