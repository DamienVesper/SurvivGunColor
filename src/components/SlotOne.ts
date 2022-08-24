import Component from '../Component';

class SlotOne extends Component {
    override element: HTMLDivElement;

    constructor () {
        super();

        this.element = document.querySelectorAll(`.ui-weapon-name`)[0] as HTMLDivElement;

        this.element.addEventListener(`DOMSubtreeModified`, () => {
            
        });
    }
}

export default SlotOne;
