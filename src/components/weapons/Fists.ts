import Component from '../../Component';

import determine from '../../utils/Determiner';

class Fists extends Component {
    override element: HTMLDivElement;

    constructor () {
        super();

        this.element = document.querySelectorAll(`.ui-weapon-name`)[2] as HTMLDivElement;

        this.element.addEventListener(`DOMSubtreeModified`, () => {
            const color = determine(this.element.textContent);

            this.element.style.border = color !== null
                ? `2px solid #${color.toString(16)}`
                : `none`;
        });
    }
}

export default Fists;
