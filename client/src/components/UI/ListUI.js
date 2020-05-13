import React from "react";
import {connect} from "react-redux";
import { List, message, Avatar, Spin } from 'antd';
import {fetchSurveys} from '../../actions/index'


class ListUI extends React.Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    render() {
        return (
            <div className="demo-infinite-container">
                <List
                        dataSource={this.props.surveys}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={item.dateSent}
                                />
                                <div>{item.body}</div>
                            </List.Item>
                        )}
                    >
                    </List>
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

/* ES15 SYNTAX
function mapStateToProps({ state }) {
    return { surveys: state.surveys };
}*/

export default connect(mapStateToProps, {fetchSurveys})(ListUI);