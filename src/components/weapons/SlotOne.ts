import Component from '../../Component';

import determine from '../../utils/Determiner';

class SlotOne extends Component {
    override element: HTMLDivElement;
    nameElement: HTMLDivElement;

    constructor () {
        super();

        this.element = document.querySelectorAll(`.ui-weapon-switch`)[0] as HTMLDivElement;
        this.nameElement = document.querySelectorAll(`.ui-weapon-name`)[0] as HTMLDivElement;

        this.nameElement.addEventListener(`DOMSubtreeModified`, () => {
            const color = determine(this.nameElement.textContent);

            this.element.style.border = color !== null
                ? `2px solid #${color.toString(16)}`
                : `none`;

            this.element.style.color = color !== null
                ? `#${color.toString(16)}`
                : `inherit`;
        });
    }
}

export default SlotOne;
