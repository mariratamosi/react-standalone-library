import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class MyComponentWrapper {
    constructor(options) {
        console.log("yess", this)
        const { message, container } = options;
        ReactDOM.render(<App message={message} />, container);
    }
}
