import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SrimChat from "./SrimChat";

export default class SrimChatWrapper {
    count = 0
    visible = true
    constructor(options) {
        console.log("yess", this)
        const { message, container } = options;
        this.container = container
        ReactDOM.render(<SrimChat message={message} visible={this.visible}/>, container);
    }

    hideChat() {
        this.count++
        this.visible = !this.visible
        ReactDOM.render(<SrimChat message={"Custom - "+this.count} visible={this.visible}/>, this.container);
    }
}
