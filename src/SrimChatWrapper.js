import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SrimChat from "./SrimChat";

export default class SrimChatWrapper {
    constructor(options) {
        console.log("yess", this)
        const { message, container } = options;
        ReactDOM.render(<SrimChat message={message} />, container);
    }
}
