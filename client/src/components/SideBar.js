import React,{useState} from 'react'
import styles from './styles/Sidebar.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import {connect} from 'react-redux'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import styled from "styled-components";

const SidebarExampleSidebar = ({open}) => {
    let { path, url } = useRouteMatch();
    console.log('PATH : ' + path) // /topics/:topicId/:subId

    console.log('URL : ' + url) // /topics/react-router/url-parameters
    return (
            <Sidebar
                as={Menu}
                direction='right'
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible={open}
                width='thin'
            >
                <Menu.Item as={Link} to={`${url}/rendering`}>
                    <Icon name='users' />
                    Users
                </Menu.Item>
                <Menu.Item as={Link} to={`${url}/components`}>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as={Link} to={`${url}/props-v-state`}>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
            </Sidebar>
    )
}

const mapStateToProps = state => ({
    open: state.sidebar.openSidebar.open
});

export default connect(mapStateToProps,null) (SidebarExampleSidebar);
