import Component from '../../Component';

import determine from '../../utils/Determiner';

class Throwable extends Component {
    override element: HTMLDivElement;

    constructor () {
        super();

        this.element = document.querySelectorAll(`.ui-weapon-name`)[3] as HTMLDivElement;

        this.element.addEventListener(`DOMSubtreeModified`, () => {
            const color = determine(this.element.textContent);

            this.element.style.border = color !== null
                ? `2px solid #${color.toString(16)}`
                : `none`;
        });
    }
}

export default Throwable;
