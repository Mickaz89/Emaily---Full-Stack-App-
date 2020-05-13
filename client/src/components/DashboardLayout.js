import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Switch, useParams, useRouteMatch,useLocation} from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import Icon from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import {
    MenuOutlined ,
    HomeOutlined,
    UserOutlined,
    MailOutlined
} from '@ant-design/icons';
import './styles/DashboardLayout.css'
import UsersLayout from "./Users/UsersLayout";

const { Header, Sider, Content } = Layout;

const FoodSvg = () => (
    <svg t="1588006070865" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="3386" width="16" height="16">
        <path
            d="M0 938.67h1024V1024H0zM979.31 810.67C962.98 630.44 844.38 479.4 682.13 416.05 676.6 326.9 602.52 256 512 256s-164.6 70.9-170.13 160.05C179.62 479.4 61.02 630.44 44.69 810.67H0V896H1024v-85.33h-44.69zM512 341.33c34.05 0 63.27 20.18 76.95 49.08C563.9 386.26 538.21 384 512 384s-51.9 2.26-76.95 6.42c13.68-28.91 42.9-49.09 76.95-49.09zM130.35 810.67C151.65 618.94 314.69 469.33 512 469.33s360.35 149.6 381.65 341.33h-763.3z"
            fill="currentColor" p-id="3387"></path>
    </svg>
);
const FoodIcon = props => <Icon component={FoodSvg} {...props} />;


const DashboardLayout = ({children}) => {
    let {  url,path } = useRouteMatch();
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState('');
    let location = useLocation();


    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const toggle = () => {
        setCollapsed(!collapsed)
    };
        return (
            <div>
                <Layout  style={{ minHeight: '100vh' }}>
                    <Sider className='sider' trigger={null} collapsible collapsed={collapsed}>
                        <div className="myLogo" >
                            <img src={process.env.PUBLIC_URL + '/logo.png'}/>
                        </div>
                        <Menu theme="light" mode="inline" defaultSelectedKeys={location.pathname.split("/")[2]} >
                            <Menu.Item key="home">
                                <Link to={`${url}/`}/>
                                <HomeOutlined />
                                <span>Home</span>
                            </Menu.Item>
                            <Menu.Item key="users">
                                <Link to={`${url}/users`}/>
                                <UserOutlined />
                                <span>Users</span>
                            </Menu.Item>
                            <Menu.Item key="food">
                                <Link to={`${url}/food`}/>
                                <FoodIcon />
                                <span>Food</span>
                            </Menu.Item>
                            <Menu.Item key="mail">
                                <Link to={`${url}/mail`}/>
                                <MailOutlined />
                                <span>Mail</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            <Menu  className="topMenu" mode="horizontal" >
                                <Menu.Item className='logo'>
                                    <Button type="primary" onClick={toggle} style={{ marginLeft: 16 }} icon={<MenuOutlined />}/>
                                </Menu.Item>

                                <Menu.Item  className='account' key="account" >
                                    <a href="/api/admin/logout">Logout</a>
                                </Menu.Item>


                            </Menu>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </div>

        );
}

export default DashboardLayout;