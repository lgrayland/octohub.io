import Events from '../../data/events.json';

export class Timeline extends HTMLElement {

    constructor() {
        super();
        this.groupings = [];
        this.event = [];

        this.toggleState = this.toggleState.bind(this);
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    disconnectedCallback() {
    }

    connectedCallback() {
        // this.innerHTML = this.render();
        this.createGroupings(Events)
        // this.$event = this.querySelector(`#event-${this._id}`);
        // this.$event.addEventListener('click', this.toggleState);
    }

    toggleState() {
        let elem = document.querySelector(`#event-${this._id} .content`);
        elem.setAttribute('data-state', elem.getAttribute('data-state') === 'closed' ? 'open' : 'closed');
        console.log(elem.getAttribute('data-state'))
    };

    createGroupings(events){
        this.events = events.sort(function(a,b){return new Date(a.date).getTime() - new Date(b.date).getTime()});
        // console.log(events);
        // this.groupings = events.reduce(function(groups, item) {
        //     let val = new Date(item.date).getFullYear();
        //     groups[val] = groups[val] || [];
        //     groups[val].push(item);
        //     return groups;
        // }, {});
        // console.log(this.groupings);
        this.innerHTML = this.render();

    }

    isEven(value) {
        return value % 2 == 0;
    }

    render() {
        return `
            ${this.events.reverse().map((event, index) => {
                return `
                    <div class="timeline-item">
                        <timeline-icon 
                            type="${event.type}"
                        >
				        </timeline-icon>
                        <timeline-event class="${this.isEven(index) ? 'right' : ''}"
                            id="${event.id}"
                            date="${event.date}"
                            details="${event.details}"
                        >
                        </timeline-event>
                    </div>
                 `;
             }).join(' ')}
        `;
    }
}
