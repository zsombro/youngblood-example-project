import { Entity, Position, SceneServices, TiledMap, TiledMapData, TiledSheetData } from "youngblood";

export default (services: SceneServices): Entity => {
    const tileset = <TiledSheetData>services.assets.get('assets/forest_tileset');
    const tilemap = <TiledMapData>services.assets.get('assets/forest');

    const tileMap = new Entity();

    tileMap.addComponent(new Position(0, 0));
    tileMap.addComponent(new TiledMap(tilemap, tileset, { scale: 2.5 }));

    return tileMap;
}