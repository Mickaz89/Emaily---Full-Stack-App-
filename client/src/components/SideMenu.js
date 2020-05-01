import React, { Component } from "react";
import styles from './styles/Menu.module.css'
import styled from 'styled-components';
import {Menu, Icon, Input, Dropdown} from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class SideMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const StyledMenu = styled(Menu) `
              
               
                margin-bottom: 0px !important;
               .active.item {
                    border-right: #33B87B !important;
                    border-right-style: solid !important;
                    border-right-width: 2px !important;
               }
              .item{
                  border-style: solid !important;
                  border-width: 1px !important;
                  border-right: none !important;
                  border-top: none !important;
                  border-left: none !important;
                  border-color: #F8F8F8 !important;
              }
        `;
        const { activeItem } = this.state;
        return (
           <div>
               <StyledMenu vertical size='massive' >
                   <Menu.Item>
                       <Input placeholder='Search...' />
                   </Menu.Item>

                   <Menu.Item>
                       Home
                       <Menu.Menu>
                           <Menu.Item
                               name='search'
                               active={activeItem === 'search'}
                               onClick={this.handleItemClick}
                           >
                               Search
                           </Menu.Item>
                           <Menu.Item
                               name='add'
                               active={activeItem === 'add'}
                               onClick={this.handleItemClick}
                           >
                               Add
                           </Menu.Item>
                           <Menu.Item
                               name='about'
                               active={activeItem === 'about'}
                               onClick={this.handleItemClick}
                           >
                               Remove
                           </Menu.Item>
                       </Menu.Menu>
                   </Menu.Item>

                   <Menu.Item
                       name='browse'
                       active={activeItem === 'browse'}
                       onClick={this.handleItemClick}
                   >
                       <Icon name='grid layout' />
                       Browse
                   </Menu.Item>
                   <Menu.Item
                       name='messages'
                       active={activeItem === 'messages'}
                       onClick={this.handleItemClick}
                   >
                       Messages
                   </Menu.Item>

                   <Dropdown item text='More'>
                       <Dropdown.Menu>
                           <Dropdown.Item icon='edit' text='Edit Profile' />
                           <Dropdown.Item icon='globe' text='Choose Language' />
                           <Dropdown.Item icon='settings' text='Account Settings' />
                       </Dropdown.Menu>
                   </Dropdown>
               </StyledMenu>
           </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(SideMenu);
