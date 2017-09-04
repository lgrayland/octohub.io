// import Store from './store';
// import View from './view';

export class Timeline extends HTMLElement {

	constructor(store, view) {
        super();
        this.store = store;
		this.view = view;
	}

    connectedCallback() {
        this.innerHTML = this.render();
    }

	render() {
		return``

        this.view.showItems(this.store.getTimelineData())
	}
}
