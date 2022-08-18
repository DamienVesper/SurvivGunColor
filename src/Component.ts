class Component {
    element: HTMLElement;

    destroy = (): void => {
        this.element.remove();
    };
}

export default Component;
