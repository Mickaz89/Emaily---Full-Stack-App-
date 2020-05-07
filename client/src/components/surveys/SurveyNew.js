import React from "react";
import SurveyForm from "./SurveyForm";

class SurveyNew extends React.Component {

    render() {
        if(this.props.showForm){
            return (
                <div>
                    <SurveyForm onSubmit={this.props.onSubmit} onOk={this.handleOk} onCancel={this.props.onCancel}/>
                </div>
            );
        }
        else {
            return (
                <div>
                </div>
            );
        }
    }
}
export default SurveyNew;