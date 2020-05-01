import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Dropdown, Menu,Checkbox } from 'semantic-ui-react'
import * as actions from "../actions";
import {openSidebar} from "../actions";

class MenuExampleSizeLarge extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu  borderless size='large'>
                <Menu.Item position='left'>
                    <Checkbox toggle onChange={this.props.openSidebarFunc}/>
                </Menu.Item>
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    position='right'
                >
                    <Button primary>Sign Up</Button>
                </Menu.Item>
            </Menu>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    openSidebarFunc: () => dispatch(openSidebar())
});

export default connect(null,mapDispatchToProps)(MenuExampleSizeLarge);