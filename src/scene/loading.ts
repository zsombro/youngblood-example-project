import { SceneOptions, SceneServices, Scene,System, Entity, InputMapping, Label, Position } from "youngblood";

const LoadingIndicatorSystem: System = {
    systemId: 'labelSystem',
    requiredComponents: ['InputMapping', 'Label'],
    update: function (entity: Entity, scene: Scene, services: SceneServices) {
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
    systems: [LoadingIndicatorSystem],
    init: function (context: Scene, services: SceneServices) {
        let handler = new Entity();
        handler.addComponent(new InputMapping([
            { name: 'proceed', code: 13 }
        ]));

        const loadingLabel = new Label("LOADING...", {
            isVisible: true,
            color: '#000',
            font: '20px monospace',
        });

        handler.addComponent(loadingLabel);
        handler.addComponent(new Position(30, 30));

        context.addEntity(handler);
        
        services.assets.load('assets/asset_list.json').then((assets): void => {
            loadingLabel.txt = 'LOADING COMPLETE. PRESS ENTER TO CONTINUE';
            console.log('Assets loaded');
        });
    }
};