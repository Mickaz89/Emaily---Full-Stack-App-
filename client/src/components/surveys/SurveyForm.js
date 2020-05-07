import _ from 'lodash';
import React from "react";
import {reduxForm, Field,SubmissionError} from "redux-form";
import SurveyField from "./SurveyField";
import validateEmail from "../../utils/validateEmail";
import styles from './styles/SurveyForm.module.css'
import {connect} from "react-redux";
import {withRouter} from'react-router-dom';
import {submitSurvey} from "../../actions/index";


function submit (values) {
    console.log('submit');
    this.props.formSubmit(values, this.props.history);
}

const SurveyForm =({error, handleSubmit}) => {

    const handleChange = e => {
        this.setState({ value: e.target.value }, () => {
            this.props.change("inputTextBox", this.state.value);
        });
    };

    const onCancel = () =>{
        this.props.onCancel();
    }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form}>
                        <Field
                            key='title'
                            placeholder='Title'
                            name='title'
                            component={SurveyField}
                            type="text"
                            handleChange={this.handleChange}

                        />
                        <Field
                            key='Subject'
                            placeholder='Subject'
                            name='subject'
                            component={SurveyField}
                            type="text"
                            handleChange={this.handleChange}
                            controlledValue={this.state.value}
                        />
                        <Field
                            key='body'
                            placeholder='Email Body'
                            name='body'
                            component={SurveyField}
                            type="text"
                            handleChange={this.handleChange}
                            controlledValue={this.state.value}
                        />
                        <Field
                            key='emails'
                            placeholder='Recipient List'
                            name='recipients'
                            component={SurveyField}
                            type="text"
                            handleChange={this.handleChange}
                            controlledValue={this.state.value}
                        />
                    </div>
                    {/*<button type="submit">Submit</button>
                    <button onClick={this.onCancel.bind(this)}> Cancel</button>*/}
                </form>
            </div>
        );

}

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


const mapDispatchToProps = (dispatch, ownProps) => ({
    formSubmit: (values,history ) => dispatch(submitSurvey(values, history))
});

export default reduxForm({
    form: 'surveyForm',
    validate,
    onSubmit: submit
})(connect(null,mapDispatchToProps)(withRouter(SurveyForm)))