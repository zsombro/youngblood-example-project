import { AnimatedSprite, AnimationSheet, Entity, InputMapping, Position, SceneServices } from "youngblood";

export default (services: SceneServices): Entity => {
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

    return wolf;
}