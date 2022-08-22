import Component from '../Component';

class Fists extends Component {
    override element: HTMLDivElement;

    constructor () {
        super();

        this.element = document.querySelector(``) as HTMLDivElement;

        this.element.id = `sic-adrenWrapper`;
        this.element.classList.add(`sic-box-container`);

        document.querySelector(`#sic-bottomWrapper`)?.appendChild(this.element);
    }
}

export default Fists;
