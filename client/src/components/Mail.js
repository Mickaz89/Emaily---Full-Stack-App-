import React from "react";
import {reduxForm, submit, reset} from "redux-form";
import {List, Avatar, Button, Skeleton, Modal} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import ModalUI from "./UI/Modal";
import SurveyNew from "./surveys/SurveyNew";
import {history} from "../modules/routes/history";
import {connect} from "react-redux";
import * as actions from "../actions";
import {withRouter} from "react-router-dom";
import validateEmail from "../utils/validateEmail";
import FormTest from "./surveys/FormTest";
import FormButtonTest from "./surveys/FormButtonTest";


class Mail extends React.Component {
    state = { visible: false, error:'abc', showForm:true };

    componentDidMount() {

    }

    showModal = () => {
        this.setState({showForm: true});
     this.props.openModal();
    };

    handleOk = e => {
        this.props.dispatch(submit('remoteSubmit'));

    };

    handleCancel = e => {
        console.log(e);
        this.props.dispatch(reset('remoteSubmit'));
        this.props.closeModal();
        this.setState({showForm: false});
    };

    render(){

        return (
            <div>
                <h1>Mail</h1>
                <br/>
                <br/>
                <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={this.showModal} />
                <ModalUI
                    visible={this.props.modal.open}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <FormButtonTest />

                    ]}
                >
                    {/*<SurveyNew  onSubmit={this.handleOk} showForm={this.state.showForm} onCancel={this.handleCancel} onOk={this.handleOk}/>*/}
                    <FormTest showForm={this.state.showForm} />
                </ModalUI>
            </div>
        );
    }
}

function mapStateToProps({ modal }) {
    return { modal };
}

export default reduxForm({
    form: 'surveyForm'
})(connect(mapStateToProps,actions)(withRouter(Mail)))