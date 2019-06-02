import { 
    Game, 
    Scene,
} from 'youngblood';

import { loading } from './scene/loading';
import { ingame } from './scene/ingame';

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
setCanvasSize(canvas);

const game = new Game(<CanvasRenderingContext2D>canvas.getContext('2d'));
game.addScene(new Scene(loading));
game.addScene(new Scene(ingame));
game.startRendering(20);

function setCanvasSize(c: HTMLCanvasElement) {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}