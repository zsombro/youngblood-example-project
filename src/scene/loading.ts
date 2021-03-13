import { SceneOptions, SceneServices, Scene,System,  InputMappingSystem, Entity, InputMapping, Label, Position } from "youngblood";

const LoadingIndicatorSystem: System = {
    systemId: 'labelSystem',
    requiredComponents: ['InputMapping', 'Label'],
    update: function (entity: Entity, scene: Scene, services: SceneServices) {
        console.log(entity);
        let label = entity['Label'] as Label;
        let inputMapping = entity['InputMapping'] as InputMapping;
        
        if (label.isVisible && inputMapping.proceed) {
            services.game.switchToScene('ingame');
        }
    }
};

export var loading: SceneOptions = {
    sceneId: 'loading',
    alwaysInitialize: false,
    init: function (context: Scene, services: SceneServices) {
        context.registerSystem(InputMappingSystem);
        context.registerSystem(LoadingIndicatorSystem);

        let handler = new Entity();
        handler.addComponent(new InputMapping([
            { name: 'proceed', code: 13 }
        ]));

        handler.addComponent(new Label("Loading complete. Press Enter to proceed", { 
            isVisible: false,
            color: '#000',
            font: 'Arial' 
        }));

        handler.addComponent(new Position(10, 10));

        context.addEntity(handler);
        
        services.assets.load('assets/asset_list.json').then((): void => { console.log('Assets loaded'); });
    }
};