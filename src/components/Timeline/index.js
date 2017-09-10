import TimelineData from '../../data/timeline';

export class Timeline extends HTMLElement {

    constructor() {
        super();
        this.groupings = [];
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    disconnectedCallback() {
    }

    connectedCallback() {
        this.groupings = TimelineData;
        this.innerHTML = this.render();
    }

    render() {
        return `
            ${this.groupings.map((grouping) => {
            return `
                <div class="group">
                    <div class="events">
                    ${grouping.items.map((event) => {
                return `
                        <event-card
                        id="${event.id}"
                        date="${event.date}"
                        details="${event.details}"
                        >
                        </event-card>
                        `;
            }).join(' ')}
                    </div>
    
                    <div class="title-container">
                        <div class="title">${grouping.title}</div>
    
                        <span class="fa-stack fa-lg">
  <i class="fa fa-circle-o fa-stack-2x"></i>
  <i class="fa fa-circle fa-stack-1x"></i>
</span>
                    </div>
                </div>
                    `;
        }).join(' ')}
            
        `;
    }
}
