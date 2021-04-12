import { 
    SceneOptions, 
    Scene, 
    SceneServices, 
    Entity, 
    Position, 
    AnimatedSprite, 
    AnimationSheet, 
    InputMapping, 
    System, 
    InputMappingSystem,
    TiledMap,
    TiledMapData,
    TiledSheetData
} from "youngblood";

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
    update: function (entity, scene, services) {
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
    systems: [InputMappingSystem, wolfAnimationSystem, mapMovementSystem],
    init: function (context: Scene, services: SceneServices) {
        const tileset = <TiledSheetData>services.assets.get('assets/forest_tileset');
        const tilemap = <TiledMapData>services.assets.get('assets/forest');
        const map = new Entity();
        map.addComponent(new Position(0, 0));
        map.addComponent(new TiledMap(tilemap, tileset, { scale: 2.5 }));
        map.addComponent(new InputMapping([
            { name: 'right', code: 39 },
            { name: 'left', code: 37 }
        ]));

        context.addEntity(map);

        const wolf_sheet = <HTMLImageElement>services.assets.get('assets/80x48Wolf_FullSheet');
        const wolf_info = <AnimationSheet>services.assets.get('assets/wolf_info');
        const wolf = new Entity();
        wolf.addComponent(new Position(100, 380));
        wolf.addComponent(new InputMapping([
            { name: 'right', code: 39 },
            { name: 'left', code: 37 }
        ]));
        wolf.addComponent(new AnimatedSprite(wolf_sheet, wolf_info, {
            animationName: 'idle',
            isPlaying: true,
            loop: true,
            scale: 3.0
        }));

        context.addEntity(wolf);
    }
}
