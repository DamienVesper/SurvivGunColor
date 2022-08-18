// Import styles.
import '../assets/scss/common.scss';

import Core from './Core';

const init = (): void => {
    setInterval(Core.counters.fps.updateFPS, 1e3); // Update FPS every second.
    setInterval(Core.counters.ping.updatePing, 1e3); // Update ping every second.

    setInterval(Core.counters.health.updateHealth, 25); // Update health every 25ms.
    setInterval(Core.counters.adren.updateAdren, 25); // Update adren every 25ms.
};

window.onload = () => {
    init();
};
