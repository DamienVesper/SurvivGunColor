import Fists from './components/weapons/Fists';
import SlotOne from './components/weapons/SlotOne';
import SlotTwo from './components/weapons/SlotTwo';
import Throwable from './components/weapons/Throwable';

interface Core {
    components: {
        weapons: {
            slotOne: SlotOne
            slotTwo: SlotTwo
            fists: Fists
            throwable: Throwable
        }
    }
}

const core: Core = {
    components: {
        weapons: {
            slotOne: new SlotOne(),
            slotTwo: new SlotTwo(),
            fists: new Fists(),
            throwable: new Throwable()
        }
    }
};

export default core;
