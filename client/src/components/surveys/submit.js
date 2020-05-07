import React from "react";
import {submitSurvey} from "../../actions";
import _ from 'lodash';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {history} from "../../modules/routes/history";


const submit = (values , dispatch ) => {
    if(_.isEmpty(values)){
        alert("The form is empty");
    }
    else{
        console.log("submit");
        dispatch((submitSurvey(values)));
    }
};

export default submit