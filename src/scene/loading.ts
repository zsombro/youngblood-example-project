import { SceneOptions, SceneServices, Scene,System, Entity, InputMapping, Label, Position } from "youngblood";

const LoadingIndicatorSystem: System = {
    systemId: 'labelSystem',
    requiredComponents: ['InputMapping', 'Label'],
    update: function (entity: Entity, scene: Scene, services: SceneServices) {
        let label = entity['Label'] as Label;
        let inputMapping = entity['InputMapping'] as InputMapping;
        
        services.event.on('loading_complete', () => {
            label.isVisible = true;
            label.txt = 'LOADING COMPLETE. PRESS ENTER TO START';
        });

        if (label.isVisible && inputMapping.proceed) {
            services.game.switchToScene('ingame');
        }
    }
};

const loadingInputHandler = () => [
    new Position(30, 30),
    new Label("LOADING...", {
        isVisible: true,
        color: '#000',
        font: '20px monospace',
    }),
    new InputMapping([
        { name: 'proceed', code: 13 }
    ]),
]

export var loading: SceneOptions = {
    sceneId: 'loading',
    alwaysInitialize: false,
    systems: [LoadingIndicatorSystem],
    entities: [loadingInputHandler],
    init: function (context: Scene, services: SceneServices) {
        services.assets.load('assets/asset_list.json').then((): void => {
            services.event.dispatch('loading_complete', {});
            console.log('Assets loaded');
        });
    }
};