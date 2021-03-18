import { 
    Game, 
} from 'youngblood';

import { loading } from './scene/loading';
import { ingame } from './scene/ingame';

new Game()
    .addScene(loading)
    .addScene(ingame)
    .setFramerate(20)
    .startRendering();
