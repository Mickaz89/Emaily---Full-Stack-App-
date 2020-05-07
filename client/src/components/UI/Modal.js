import React from "react";
import { Modal, Button } from 'antd';

class ModalUI extends React.Component {
    render() {
        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={this.props.visible}
                    onOk={this.props.onOk}
                    onCancel={this.props.onCancel}
                    footer ={this.props.footer}
                >
                    {this.props.children}
                </Modal>
            </div>
        );
    }
}

export default ModalUI;