import LanguageData from '../../data/languages';

export class Languages extends HTMLElement {

    constructor() {
        super();
        this.languages = [];
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    disconnectedCallback() {
    }

    connectedCallback() {
        this.languages = LanguageData;
        this.innerHTML = this.render();
    }

    render() {
        return `
            <h2>Languages</h2>
            ${this.languages.map((language) => {
            return `
                <progress max="100" value="${language.value}" data-label="${language.name}"">
                    <div class="progress-bar">
                    </div>
                </progress>
                    `;
        }).join(' ')}
            
        `;
    }
}
