import { 
    SceneOptions, 
    Scene, 
    SceneServices, 
    Entity, 
    System, 
    InputMappingSystem
} from "youngblood";


import tileMap from '../entity/tilemap';
import wolf from '../entity/wolf';

const wolfAnimationSystem: System = {
    systemId: 'wolfAnimationSystem',
    requiredComponents: ['AnimatedSprite', 'Position', 'InputMapping'],
    update: function (entity: Entity, scene: Scene, services: SceneServices) {
        const sprite = entity.get('AnimatedSprite');
        const pos = entity.get('Position');
        const inputMapping = entity.get('InputMapping');

        if (inputMapping.right) {
            sprite.animationName = 'running';
            sprite.flip = false;
        } else if (inputMapping.left) {
            sprite.animationName = 'running';
            sprite.flip = true;
        } else {
            sprite.animationName = 'idle';
        }
    }
}

const mapMovementSystem: System = {
    systemId: 'mapMovementSystem',
    requiredComponents: ['Position', 'TiledMap'],
    update: function (entity: Entity, scene: Scene, services: SceneServices) {
        const pos = entity.get('Position');
        const inputMapping = entity.get('InputMapping');

        if (inputMapping.right) {
            pos.x -= 20;
        } else if (inputMapping.left) {
            pos.x += 20;
        }
    }
}

export var ingame: SceneOptions = {
    sceneId: 'ingame',
    alwaysInitialize: true,
    entities: [tileMap, wolf],
    systems: [InputMappingSystem, wolfAnimationSystem, mapMovementSystem]
}
