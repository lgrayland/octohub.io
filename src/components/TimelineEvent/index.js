export class TimelineEvent extends HTMLElement {

    constructor() {
        super();
        this._id = null;
        this._date = null;
        this._details = null;
        this._type = null;

        this.$event = null;

        this.toggleState = this.toggleState.bind(this);
        this.eventIcon = this.eventIcon.bind(this);
    }

    static get observedAttributes() {
        return ['id', 'date', 'details', 'type'];
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
        this.$event = this.querySelector(`#event-${this._id}`);
        this.$event.addEventListener('click', this.toggleState);
    }

    toggleState() {
        let elem = document.querySelector(`#event-details-${this._id}`);
        elem.setAttribute('data-state', elem.getAttribute('data-state') === 'closed' ? 'open' : 'closed');
        console.log(elem.getAttribute('data-state'))
    };

    eventIcon(type){
        switch (type) {
            case 'education': {
                return `<i class="fa fa-graduation-cap fa-stack-1x"></i>`;
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
            default:
                return `<i class="fa fa-circle fa-stack-1x"></i>`
        }
    }

    render() {
        return `
            <div id="event-${this._id}" class="timeline-header">
                <h2 class='member-title'>${this._date}</h2>
            </div>
            <div id="event-details-${this._id}" class="timeline-content" data-state="closed">
                <p  class="event-details" >
                    ${this._details}
                </p>
            </div>
            
            
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