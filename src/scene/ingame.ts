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
    InputMappingSystem 
} from "youngblood";

export var ingame: SceneOptions = {
    sceneId: 'ingame',
    alwaysInitialize: true,
    init: function (context: Scene, services: SceneServices) {
        context.registerSystem(InputMappingSystem);
        context.registerSystem(wolfMovementSystem);

        const bg_image = <HTMLImageElement>services.assets.get('assets/background');
        const background = new Entity();
        background.addComponent(new Position(-150, -300));
        background.addComponent(new Sprite(bg_image));

        context.addEntity(background);

        const wolf_sheet = <HTMLImageElement>services.assets.get('assets/80x48Wolf_FullSheet');
        const wolf_info = <AnimationSheet>services.assets.get('assets/wolf_info');
        const wolf = new Entity();
        wolf.addComponent(new Position(100, 445));
        wolf.addComponent(new InputMapping([
            { name: 'right', code: 39 },
            { name: 'left', code: 37 }
        ]));
        wolf.addComponent(new AnimatedSprite(wolf_sheet, wolf_info, {
            animationName: 'idle',
            isPlaying: true,
            loop: true,
            scale: 5.0
        }));

        context.addEntity(wolf);
    }
}

const wolfMovementSystem: System = {
    systemId: 'wolfMovementSystem',
    requiredComponents: ['AnimatedSprite', 'Position', 'InputMapping'],
    update: function (entity: Entity, services: SceneServices) {
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