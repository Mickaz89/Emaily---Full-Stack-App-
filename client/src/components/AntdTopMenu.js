import React from "react";
import {Button, Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import './styles/TopMenu.css';
import {openSidebar} from "../actions";
import {connect} from "react-redux";
const { SubMenu } = Menu;

class AntdTopMenu extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className="topMenu">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
                    <Menu.Item className='logo' key="logo">
                        Home
                    </Menu.Item>
                    <Menu.Item  className='account' key="account" >
                        My Account
                    </Menu.Item>
                    <Menu.Item  className='account' key="account" >
                        My Account
                    </Menu.Item>

                </Menu>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    open: state.sidebar.openSidebar.open
});

const mapDispatchToProps = dispatch => ({
    openSidebarFunc: () => dispatch(openSidebar())
});

export default connect(mapStateToProps,mapDispatchToProps)(AntdTopMenu);