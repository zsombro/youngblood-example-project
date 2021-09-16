import {
  AnimatedSprite,
  AnimationSheet,
  Component,
  Entity,
  InputMapping,
  Position,
  SceneServices,
} from "youngblood";

export default (services: SceneServices): Component[] => [
  new Position(100, 380),
  new InputMapping([
    { name: "right", code: 39 },
    { name: "left", code: 37 },
  ]),
  new AnimatedSprite(
    <HTMLImageElement>services.assets.get("assets/80x48Wolf_FullSheet"),
    <AnimationSheet>services.assets.get("assets/wolf_info"),
    {
      animationName: "idle",
      isPlaying: true,
      loop: true,
      scale: 3.0,
    }
  ),
];
