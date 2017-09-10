export class EventCard extends HTMLElement {

    constructor() {
        super();
        this._id = null;
        this._date = null;
        this._details = null;

        this.$event = null;

        this.toggleState = this.toggleState.bind(this);
    }

    static get observedAttributes() {
        return ['id', 'date', 'details'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue) {
            switch (name) {
                case 'id': {
                    this._id = newValue;
                    this.innerHTML = this.render();
                    break;
                }
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
        this.$cardHeader.removeEventListener('click', this.toggleState);
    }

    connectedCallback() {
        this.innerHTML = this.render();
        this.$event = this.querySelector(`#event-${this._id}`);
        this.$event.addEventListener('click', this.toggleState);
    }

    toggleState() {
        let elem = document.querySelector(`#event-${this._id} .content`);
        elem.setAttribute('data-state', elem.getAttribute('data-state') === 'closed' ? 'open' : 'closed');
        console.log(elem.getAttribute('data-state'))
    };

    render() {
        return `
            <span class="fa-stack fa-lg">
                <i class="fa fa-circle-o fa-stack-2x"></i>
                <i class="fa fa-circle fa-stack-1x"></i>
            </span>
            <div id="event-${this._id}" class="event-card">
                <div class="card-header">
                    ${this._date}
                </div>
                <div class="content"
                data-state="closed"
                >
                    ${this._details}
                </div>
            </div>
        `;
    }
}
