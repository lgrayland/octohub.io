// import Controller from './controller';
import {escapeForHTML} from '../../utils/helpers';
// import Template from './template';
// import Store from './store';
// import View from './view';
//
// const store = new Store('octohub');
//
// const template = new Template();
// const view = new View(template);
//
// /**
//  * @type {Controller}
//  */
// const controller = new Controller(store, view);
//
// $on(window, 'load', controller.render());
import TimelineData from '../../data/timeline';

export class TimelineContainerComponent extends HTMLElement {

    constructor() {
        super();
        this.groupings = [];
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        this.groupings = TimelineData;
        this.innerHTML = this.render();
    }

    disconnectedCallback() {

    }

    render() {
        return `
            ${this.groupings.map(grouping => {
            return `
                        <li data-id="${grouping.id}">
	                        ${escapeForHTML(grouping.title)}
                        </li>
                    `;
        }).join(' ')}
            
        `;
    }
}
