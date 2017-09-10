export class EventCard extends HTMLElement {

    constructor() {
        super();
        this._date = null;
        this._details = null;
    }

    static get observedAttributes() {
        return ['date', 'details'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue) {
            switch (name) {
                case 'date': {
                    this._date = newValue;
                    this.innerHTML = this.render();
                    break;
                }
                case 'details': {
                    this._details = newValue;
                    this.innerHTML = this.render();
                    break;
                }
            }
        }

    }

    disconnectedCallback() {
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return `
            <span class="fa-stack fa-lg">
                <i class="fa fa-circle-o fa-stack-2x"></i>
                <i class="fa fa-circle fa-stack-1x"></i>
            </span>
            <div id="event-card" class="event-card">
            <div class="header">
                ${this._date}
            </div>
            <div class="content">
                ${this._details}
            </div>
            </div>
        `;
    }
}
