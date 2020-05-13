import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchUser} from "../../actions";
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './styles/Login.module.css'
import {GoogleOutlined, UserOutlined} from '@ant-design/icons';
import Icon from "../UI/Icon";
import LoginForm from "./LoginForm";

class Login extends Component {
    render() {

        const onClick = () => {
          console.log("ONCLICK LOGIN");

        };

        return (
            <div>
                <div className={styles.root}>
                    <div className={styles.container}>
                        <h1>Qui Toque ! - Dashboard</h1>
                        <div className={styles.button}>
                            <a href={"/auth/google"}>
                                <Button   className={styles.googleButton}>
                                    <Icon className={styles.icon} size={18} icon='google'/>
                                    <p>Connectez-vous avec Google</p>
                                </Button>
                            </a>
                        </div>
                        <div className={styles.form}>
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser())
});
export default connect(null,mapDispatchToProps)(Login);
