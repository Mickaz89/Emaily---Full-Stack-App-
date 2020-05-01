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
import { Header, Icon, Image,  Segment, Sidebar } from 'semantic-ui-react'
import styled from "styled-components";
import { Menu, Button } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const AntdSideMenu = ({open}) => {
    let {  url } = useRouteMatch();

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div style={{ width: 256 }}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"


            >

                <Menu.Item key="1">
                    <Link to={`${url}/rendering`}/>
                    <HomeOutlined />
                    <span>Home</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                <MailOutlined />
                <span>Users</span>
              </span>
                    }
                >
                    <Menu.Item
                        key="2">All Users
                        <Link to={`${url}/users`}>Components</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="3">Custommers
                        <Link to={`${url}/props-v-state`}>Props v. State</Link>
                    </Menu.Item>
                    <Menu.Item key="4">Admins</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                <AppstoreOutlined />
                <span>Food</span>
              </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}

const mapStateToProps = state => ({
    open: state.sidebar.openSidebar.open
});

export default connect(mapStateToProps,null) (AntdSideMenu);
