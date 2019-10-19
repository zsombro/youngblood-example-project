import { 
    Game, 
} from 'youngblood';

import { loading } from './scene/loading';
import { ingame } from './scene/ingame';

setCanvasSize(document.querySelector('canvas'));

new Game()
    .addScene(loading)
    .addScene(ingame)
    .setFramerate(20)
    .startRendering();

function setCanvasSize(c: HTMLCanvasElement | null) {
    if (c) {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    }
}