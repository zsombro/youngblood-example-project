import { 
    SceneOptions, 
    Scene, 
    SceneServices, 
    Entity, 
    Position, 
    Sprite, 
    AnimatedSprite, 
    AnimationSheet, 
    InputMapping, 
    System, 
    InputMappingSystem,
    TiledMap,
    TiledMapData,
    TiledSheetData
} from "youngblood";

export var ingame: SceneOptions = {
    sceneId: 'ingame',
    alwaysInitialize: true,
    init: function (context: Scene, services: SceneServices) {
        context.registerSystem(InputMappingSystem);
        context.registerSystem(wolfMovementSystem);

        const tileset = <TiledSheetData>services.assets.get('assets/forest_tileset');
        const tilemap = <TiledMapData>services.assets.get('assets/forest');
        const map = new Entity();
        map.addComponent(new Position(0, 0));
        map.addComponent(new TiledMap(tilemap, tileset, { scale: 2.5 }));

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

const wolfMovementSystem: System = {
    systemId: 'wolfMovementSystem',
    requiredComponents: ['AnimatedSprite', 'Position', 'InputMapping'],
    update: function (entity: Entity, scene: Scene, services: SceneServices) {
        const sprite = entity.get('AnimatedSprite');
        const pos = entity.get('Position');
        const inputMapping = entity.get('InputMapping');

        if (inputMapping.right) {
            sprite.animationName = 'running';
            sprite.flip = false;
            pos.x += 20;
        } else if (inputMapping.left) {
            sprite.animationName = 'running';
            sprite.flip = true;
            pos.x -= 20;
        } else {
            sprite.animationName = 'idle';
        }
    }
}