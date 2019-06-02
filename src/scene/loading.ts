import { SceneOptions, SceneServices, Scene, InputMappingSystem, Entity, InputMapping, Label, Position } from "youngblood";

export var loading: SceneOptions = {
    sceneId: 'loading',
    alwaysInitialize: false,
    init: function (context: Scene, services: SceneServices) {
        context.registerSystem(InputMappingSystem);
        context.registerSystem({
            systemId: 'labelSystem',
            requiredComponents: ['InputMapping', 'Label'],
            update: function (entity: Entity, services: SceneServices) {
                let label = entity['Label'] as Label;
                let inputMapping = entity['InputMapping'] as InputMapping;

                if (!services.assets.isReady())
                    return;
                else
                    label.isVisible = true;
                
                if (services.assets.isReady() && inputMapping.proceed) {
                    services.game.switchToScene('ingame');
                }
            }
        });

        let handler = new Entity();
        handler.addComponent(new InputMapping([
            { name: 'proceed', code: 13 }
        ]));

        handler.addComponent(
            new Label("Loading complete. Press Enter to proceed", { 
                isVisible: false,
                color: '#000',
                font: 'Arial' 
            })
        );
        handler.addComponent(new Position(10, 10));

        context.addEntity(handler);
        
        services.assets.addTaskList('assets/asset_list.txt');
    }
};