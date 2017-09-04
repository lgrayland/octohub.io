import "@webcomponents/webcomponentsjs/webcomponents-lite";
import {Core} from "./utils/core";

import './styles/main.scss'

class App {
    constructor() {
        // new Authentication();
        // const router = new RouterHandler();
        new Core();
        // new Http();
        // router.init();
    }
}

if ('registerElement' in document
    && 'import' in document.createElement('link')
    && 'content' in document.createElement('template')) {
    // platform is good!
    new App();
} else {
    setTimeout(() => {
        new App();
    });
}