export class TimelineIcon extends HTMLElement {

    constructor() {
        super();
        this._type = null;

        this.eventIcon = this.eventIcon.bind(this);
    }

    static get observedAttributes() {
        return ['type'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue) {
            switch (name) {
                case 'type': {
                    this._type = newValue;
                    this.innerHTML = this.render();
                    break;
                }
            }
        }

    }

    disconnectedCallback() {
        this.$event.removeEventListener('click', this.toggleState);
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    toggleState() {
        let elem = document.querySelector(`#event-details-${this._id}`);
        elem.setAttribute('data-state', elem.getAttribute('data-state') === 'closed' ? 'open' : 'closed');
        console.log(elem.getAttribute('data-state'))
    };

    eventIcon(type){
        switch (type) {
            case 'education': {
                return `<i class="fa fa-graduation-cap fa-lg"></i>`;
            }
            default:
                return `<i class="fa fa-circle fa-lg"></i>`
        }
    }

    render() {
        return `
            ${this.eventIcon(this._type)}          
        `;
    }
}
// <span class="fa-stack fa-lg">
//     <i class="fa fa-circle-o fa-stack-2x"></i>
//     ${this.eventIcon(this._type)}
//     </span>
//     <div id="event-${this._id}" class="event-card">
//     <div class="card-header">
//     ${this._date}
//     </div>
//     <div class="content"
// data-state="closed"
//     >
//     ${this._details}
//     </div>
//     </div>