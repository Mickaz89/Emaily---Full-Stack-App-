import React from "react";
import { Field, reduxForm } from "redux-form";
import{connect} from 'react-redux'
import SurveyField from "./SurveyField";
import * as actions from "../../actions";
import {withRouter} from "react-router-dom";
import submit from "./submit";
import validateEmail from "../../utils/validateEmail";



const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const RemoteSubmitForm = props => {

    const { error, handleSubmit, showForm } = props;
    if(showForm){
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    key='title'
                    placeholder='Title'
                    name='title'
                    component={SurveyField}
                    type="text"


                />
                <Field
                    key='Subject'
                    placeholder='Subject'
                    name='subject'
                    component={SurveyField}
                    type="text"
                />
                <Field
                    key='body'
                    placeholder='Email Body'
                    name='body'
                    component={SurveyField}
                    type="text"
                />
                <Field
                    key='emails'
                    placeholder='Recipient List'
                    name='recipients'
                    component={SurveyField}
                    type="text"
                />
                {error && <strong>{error}</strong>}
                <div>
                    No submit button in the form. The submit button below is a separate
                    unlinked component.
                </div>
            </form>
        );
    }
    else{
        return <div></div>
    }
};
function validate(values) { // values coming from the redux from
    const errors = {};

    console.log('VALUES :' , values);

    errors.recipients = validateEmail(values.recipients || '' );

    console.log('ERRORS EMAILS', errors.emails)

    if(!values.title){
        errors.title= 'You must provide a title';
    }
    if(!values.subject){
        errors.subject ='You must provide a subject';
    }
    if(!values.body){
        errors.body ='You must provide a content';
    }
    if(!values.recipients){
        errors.recipients ='You must provide an email';
    }
    return errors;
}

export default reduxForm({
    form: 'remoteSubmit',
    validate,
    onSubmit:submit
})(connect(null,actions)(withRouter(RemoteSubmitForm)))