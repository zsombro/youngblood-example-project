/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../youngblood/bundle/youngblood.js":
/*!******************************************!*\
  !*** ../youngblood/bundle/youngblood.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scene = /** @class */ (function () {
    function Scene(options) {
        var _this = this;
        this.sceneId = options.sceneId;
        this.initialized = false;
        this.alwaysInitialize = options.alwaysInitialize || true;
        this.initCallback = options.init;
        this.gameEntities = {};
        this.systems = {};
        if (options.systems)
            options.systems.forEach(function (s) { return _this.registerSystem(s); });
    }
    Scene.prototype.registerSystem = function (system) {
        this.systems[system.systemId] = system;
    };
    Scene.prototype.unregisterSystem = function (system) {
        delete this.systems[system.systemId];
    };
    Scene.prototype.addEntity = function (entity) {
        this.gameEntities[entity.id] = entity;
    };
    return Scene;
}());
exports.Scene = Scene;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(2);
exports.Game = game_1.default;
var scene_1 = __webpack_require__(0);
exports.Scene = scene_1.Scene;
var entity_1 = __webpack_require__(7);
exports.Entity = entity_1.default;
var component_1 = __webpack_require__(8);
exports.Position = component_1.Position;
exports.Velocity = component_1.Velocity;
exports.Sprite = component_1.Sprite;
exports.AnimatedSprite = component_1.AnimatedSprite;
exports.Box = component_1.Box;
exports.InputMapping = component_1.InputMapping;
exports.Label = component_1.Label;
var system_1 = __webpack_require__(9);
exports.InputMappingSystem = system_1.InputMappingSystem;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scene_1 = __webpack_require__(0);
var inputmanager_1 = __webpack_require__(3);
var audiomanager_1 = __webpack_require__(4);
var assetloader_1 = __webpack_require__(5);
var renderer_1 = __webpack_require__(6);
var Game = /** @class */ (function () {
    /**
     * Returns a new `Game` instance.
     */
    function Game() {
        this.renderer = null;
        // these are classes that offer lower level functionality to systems
        // mostly through browser APIs
        this.services = {
            input: new inputmanager_1.default(),
            audio: new audiomanager_1.default(),
            assets: new assetloader_1.default(),
            game: {
                switchToScene: this.switchToScene.bind(this),
            },
        };
        this.gameScenes = {};
        this.currentScene = null;
        this.fps = 60;
        this.then = Date.now();
        console.info('Game created');
    }
    /**
     * This is what's gonna kickstart your game when you're done setting it up!
     *
     * @param canvasSelector CSS selector for the `canvas` you want to render into. Leaving this empty assumes
     * you only have one `<canvas>` element on your page. _Irrelevant if you've registered
     * a custom renderer._
     */
    Game.prototype.startRendering = function (canvasSelector) {
        if (canvasSelector === void 0) { canvasSelector = 'canvas'; }
        if (!this.renderer) {
            var canvas = document.querySelector(canvasSelector);
            if (!canvas)
                throw new Error('No canvas element was found in the document');
            var ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = false;
            this.setRenderer(renderer_1.default(ctx));
        }
        this.startSystem();
        console.info("Started rendering at " + this.fps + "fps");
    };
    /**
     * Set an upper framerate limit. `60` by default!
     * @param fps
     */
    Game.prototype.setFramerate = function (fps) {
        this.fps = fps;
        return this;
    };
    /**
     * You can set a custom renderer instead of the default 2D one. It's a function
     * that will be called at the end of every game loop.
     * @param renderingFunction A function that takes a `Scene` object and does something with it.
     */
    Game.prototype.setRenderer = function (renderingFunction) {
        this.renderer = renderingFunction;
        return this;
    };
    /**
     * Register a new `Scene`. You'll need at least one to do anything!
     * @param sceneOptions Settings for your scene, like it's name or how it should be
     * initialized.
     */
    Game.prototype.addScene = function (sceneOptions) {
        this.gameScenes[sceneOptions.sceneId] = new scene_1.Scene(sceneOptions);
        this.gameScenes[sceneOptions.sceneId].assets = this.services.assets;
        if (this.currentScene == null)
            this.switchToScene(sceneOptions.sceneId);
        console.info("Scene added: " + sceneOptions.sceneId);
        return this;
    };
    /**
     * Switch to a different scene. Also available as a `SceneService`. If you don't call it
     * before starting the game, it will start with the first one you added.
     * @param sceneId The id provided when the scene was registered
     */
    Game.prototype.switchToScene = function (sceneId) {
        if (this.gameScenes[sceneId] == null) {
            console.error("Scene doesn't exist: " + sceneId);
            return this;
        }
        this.currentScene = this.gameScenes[sceneId];
        if (!this.currentScene.initialized || this.currentScene.alwaysInitialize)
            this.currentScene.initCallback(this.currentScene, this.services);
        return this;
    };
    Game.prototype.startSystem = function () {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.startSystem();
        });
        this.interval = 1000 / this.fps;
        this.now = Date.now();
        this.delta = this.now - this.then;
        if (this.delta > this.interval) {
            this.then = this.now - (this.delta % this.interval);
            if (!this.currentScene)
                return;
            this.update();
            this.renderer(this.currentScene);
        }
    };
    Game.prototype.update = function () {
        for (var e in this.currentScene.gameEntities) {
            for (var s in this.currentScene.systems) {
                var entity = this.currentScene.gameEntities[e];
                var system = this.currentScene.systems[s];
                console.log(entity, system.requiredComponents);
                if (entity.hasComponents(system.requiredComponents))
                    this.currentScene.systems[s].update(entity, this.services);
            }
        }
    };
    return Game;
}());
exports.default = Game;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = /** @class */ (function () {
    function InputManager() {
        var that = this;
        this.pressedKeys = [];
        window.addEventListener('keydown', function (e) {
            if (that.pressedKeys.indexOf(e.keyCode) === -1)
                that.pressedKeys.push(e.keyCode);
        }, false);
        window.addEventListener('keyup', function (e) {
            that.pressedKeys.splice(that.pressedKeys.indexOf(e.keyCode), 1);
        }, false);
    }
    InputManager.prototype.isPressed = function (key) {
        return this.pressedKeys.indexOf(key) !== -1;
    };
    return InputManager;
}());
exports.default = InputManager;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        try {
            this.audioContext = new AudioContext();
            this.songsPlaying = [];
            this.masterVolume = this.audioContext.createGain();
            this.musicVolume = this.audioContext.createGain();
            this.musicVolume.connect(this.masterVolume);
            this.effectsVolume = this.audioContext.createGain();
            this.effectsVolume.connect(this.masterVolume);
            this.masterVolume.connect(this.audioContext.destination);
        }
        catch (e) {
            console.error(e);
        }
    }
    AudioManager.prototype.setBackgroundMusic = function (buffer, loop) {
        if (this.songsPlaying.indexOf(buffer) == -1) {
            var that = this;
            var source = this.audioContext.createBufferSource();
            source.buffer = buffer;
            source.loop = loop || false;
            source.connect(this.musicVolume);
            source.start();
            source.onended = function () {
                if (!loop)
                    that.songsPlaying.splice(that.songsPlaying.indexOf(buffer), 1);
            };
            this.songsPlaying.push(buffer);
        }
    };
    AudioManager.prototype.playSound = function (buffer, loop) {
        var source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        source.loop = loop || false;
        source.connect(this.effectsVolume);
        source.start();
    };
    return AudioManager;
}());
exports.default = AudioManager;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var audioContext = new AudioContext();
function fetchImage(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () { return resolve(image); };
        image.onerror = function (ev) { return reject(ev); };
        image.src = url;
    });
}
function fetchAudio(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch(url)
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (buffer) { return audioContext.decodeAudioData(buffer); })];
        });
    });
}
function fetchObject(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch(url).then(function (response) { return response.json(); })];
        });
    });
}
function getExtension(url) {
    var extensions = url.match(/\.[a-zA-Z0-9]+/g);
    return extensions[extensions.length - 1];
}
exports.getExtension = getExtension;
var AssetLoader = /** @class */ (function () {
    function AssetLoader() {
        this.taskQueueLength = 0;
        this.completedTasks = 0;
        this.assets = {};
    }
    AssetLoader.prototype.load = function (assetListUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, assetData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(assetListUrl)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        assetData = json.assets;
                        this.completedTasks = 0;
                        this.taskQueueLength = assetData.length;
                        return [4 /*yield*/, Promise.all(assetData.map(this.fetchAsset.bind(this)))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AssetLoader.prototype.progress = function () {
        return this.completedTasks / this.taskQueueLength;
    };
    AssetLoader.prototype.get = function (name) {
        return this.assets[name];
    };
    AssetLoader.prototype.fetchAsset = function (asset) {
        return __awaiter(this, void 0, void 0, function () {
            var extension, assetName, _a, _b, _c, _d, _e, _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        extension = getExtension(asset.url);
                        assetName = asset.url.replace(extension, '');
                        _a = asset.type;
                        switch (_a) {
                            case 'audio': return [3 /*break*/, 1];
                            case 'image': return [3 /*break*/, 3];
                            case 'json': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        _b = this.assets;
                        _c = assetName;
                        return [4 /*yield*/, fetchAudio(asset.url)];
                    case 2:
                        _b[_c] = _h.sent();
                        return [3 /*break*/, 7];
                    case 3:
                        _d = this.assets;
                        _e = assetName;
                        return [4 /*yield*/, fetchImage(asset.url)];
                    case 4:
                        _d[_e] = _h.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        _f = this.assets;
                        _g = assetName;
                        return [4 /*yield*/, fetchObject(asset.url)];
                    case 6:
                        _f[_g] = _h.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return AssetLoader;
}());
exports.default = AssetLoader;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return function (scene) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var cur;
    for (var e in scene.gameEntities) {
        cur = scene.gameEntities[e];
        // This basic shape is more of a testing thing
        if (cur.hasComponents(['Box', 'Position'])) {
            ctx.fillStyle = cur.Box.fillStyle;
            ctx.fillRect(cur.Position.x, cur.Position.y, cur.Box.width, cur.Box.height);
        }
        if (cur.hasComponents(['Label', 'Position'])) {
            ctx.fillStyle = cur.Label.color;
            ctx.fillText(cur.Label.txt, cur.Position.x, cur.Position.y);
        }
        // Render a single sprite
        if (cur.hasComponents(['Sprite', 'Position'])) {
            ctx.drawImage(cur.Sprite.spriteSource, cur.Position.x, cur.Position.y);
        }
        // Render an animated sprite
        if (cur.hasComponents(['AnimatedSprite', 'Position'])) {
            var c = cur.get('AnimatedSprite');
            var f = c.animationSheet[c.animationName];
            if (c.flip) {
                ctx.translate(cur.Position.x, 0);
                ctx.scale(-1, 1);
            }
            ctx.drawImage(c.spriteSource, f.startX + c.currentFrame * f.frameWidth, f.startY, f.frameWidth, f.frameHeight, c.flip ? -c.scale * f.frameWidth : cur.Position.x, cur.Position.y, f.frameWidth * c.scale, f.frameHeight * c.scale);
            if (c.flip)
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            if (c.isPlaying) {
                if (c.currentFrame >= f.frames - 1)
                    c.currentFrame = 0;
                else
                    c.currentFrame++;
            }
        }
    }
}; });


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity() {
        this.id = Entity.prototype.count;
        Entity.prototype.count++;
    }
    Entity.prototype.addComponent = function (component) {
        this[component.constructor.name] = component;
    };
    Entity.prototype.removeComponent = function (componentName) {
        delete this[componentName];
    };
    Entity.prototype.hasComponent = function (componentName) {
        return !!this[componentName];
    };
    Entity.prototype.hasComponents = function (componentArray) {
        var len = componentArray.length;
        for (var i = 0; i < len; i++) {
            if (!this.hasComponent(componentArray[i]))
                return false;
        }
        return true;
    };
    Entity.prototype.get = function (name) {
        switch (name) {
            case 'Velocity':
                return this[name];
            case 'Position':
                return this[name];
            case 'Sprite':
                return this[name];
            case 'AnimatedSprite':
                return this[name];
            case 'InputMapping':
                return this[name];
            default:
                return this[name];
        }
    };
    return Entity;
}());
exports.default = Entity;
Entity.prototype.count = 0;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
exports.Position = Position;
var Velocity = /** @class */ (function () {
    function Velocity(x, y) {
        this.x = x;
        this.y = y;
    }
    return Velocity;
}());
exports.Velocity = Velocity;
var Label = /** @class */ (function () {
    function Label(txt, options) {
        this.txt = txt;
        this.color = options.color || '#000';
        this.font = options.font || 'monospace';
        this.isVisible = options.isVisible || true;
    }
    return Label;
}());
exports.Label = Label;
var Sprite = /** @class */ (function () {
    function Sprite(spriteSource) {
        this.spriteSource = spriteSource;
    }
    return Sprite;
}());
exports.Sprite = Sprite;
var AnimatedSprite = /** @class */ (function () {
    function AnimatedSprite(spriteSource, animationSheet, options) {
        this.spriteSource = spriteSource;
        this.animationSheet = animationSheet;
        if (options === undefined)
            var options = {};
        // If there's no default animation set, we'll use the first one defined in the JSON object
        this.animationName = options.animationName || Object.keys(animationSheet)[0];
        this.scale = options.scale || 1.0;
        this.loop = options.loop || true;
        this.isPlaying = options.isPlaying || true;
        this.flip = options.flip || false;
        this.currentFrame = 0;
    }
    return AnimatedSprite;
}());
exports.AnimatedSprite = AnimatedSprite;
var AudioSource = /** @class */ (function () {
    function AudioSource(audioBuffer) {
        this.audioBuffer = audioBuffer;
    }
    return AudioSource;
}());
exports.AudioSource = AudioSource;
var Box = /** @class */ (function () {
    function Box(width, height, fillStyle) {
        this.width = width;
        this.height = height;
        this.fillStyle = fillStyle;
    }
    return Box;
}());
exports.Box = Box;
var BoxCollider = /** @class */ (function () {
    function BoxCollider(width, height) {
        this.width = width;
        this.height = height;
    }
    return BoxCollider;
}());
exports.BoxCollider = BoxCollider;
var InputMapping = /** @class */ (function () {
    // for eg. mapping = [ {name: 'up', code: 38} ]
    function InputMapping(mapping) {
        this.mapping = mapping;
        for (var i = 0; i < mapping.length; i++) {
            this[mapping[i].name] = false;
        }
    }
    return InputMapping;
}());
exports.InputMapping = InputMapping;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMappingSystem = {
    systemId: 'inputMappingSystem',
    requiredComponents: ['InputMapping'],
    update: function (entity, services) {
        var inputMapping = entity['InputMapping'];
        for (var i = 0; i < inputMapping.mapping.length; i++) {
            var c = inputMapping.mapping[i];
            inputMapping[c.name] = services.input.isPressed(c.code);
        }
    },
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=youngblood.js.map

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var youngblood_1 = __webpack_require__(/*! youngblood */ "../youngblood/bundle/youngblood.js");
var loading_1 = __webpack_require__(/*! ./scene/loading */ "./src/scene/loading.ts");
var ingame_1 = __webpack_require__(/*! ./scene/ingame */ "./src/scene/ingame.ts");
setCanvasSize(document.querySelector('canvas'));
new youngblood_1.Game()
    .addScene(loading_1.loading)
    .addScene(ingame_1.ingame)
    .setFramerate(20)
    .startRendering();
function setCanvasSize(c) {
    if (c) {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    }
}


/***/ }),

/***/ "./src/scene/ingame.ts":
/*!*****************************!*\
  !*** ./src/scene/ingame.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var youngblood_1 = __webpack_require__(/*! youngblood */ "../youngblood/bundle/youngblood.js");
exports.ingame = {
    sceneId: 'ingame',
    alwaysInitialize: true,
    init: function (context, services) {
        context.registerSystem(youngblood_1.InputMappingSystem);
        context.registerSystem(wolfMovementSystem);
        var bg_image = services.assets.get('assets/background');
        var background = new youngblood_1.Entity();
        background.addComponent(new youngblood_1.Position(-150, -300));
        background.addComponent(new youngblood_1.Sprite(bg_image));
        context.addEntity(background);
        var wolf_sheet = services.assets.get('assets/80x48Wolf_FullSheet');
        var wolf_info = services.assets.get('assets/wolf_info');
        var wolf = new youngblood_1.Entity();
        wolf.addComponent(new youngblood_1.Position(100, 445));
        wolf.addComponent(new youngblood_1.InputMapping([
            { name: 'right', code: 39 },
            { name: 'left', code: 37 }
        ]));
        wolf.addComponent(new youngblood_1.AnimatedSprite(wolf_sheet, wolf_info, {
            animationName: 'idle',
            isPlaying: true,
            loop: true,
            scale: 5.0
        }));
        context.addEntity(wolf);
    }
};
var wolfMovementSystem = {
    systemId: 'wolfMovementSystem',
    requiredComponents: ['AnimatedSprite', 'Position', 'InputMapping'],
    update: function (entity, services) {
        var sprite = entity.get('AnimatedSprite');
        var pos = entity.get('Position');
        var inputMapping = entity.get('InputMapping');
        if (inputMapping.right) {
            sprite.animationName = 'running';
            sprite.flip = false;
            pos.x += 20;
        }
        else if (inputMapping.left) {
            sprite.animationName = 'running';
            sprite.flip = true;
            pos.x -= 20;
        }
        else {
            sprite.animationName = 'idle';
        }
    }
};


/***/ }),

/***/ "./src/scene/loading.ts":
/*!******************************!*\
  !*** ./src/scene/loading.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var youngblood_1 = __webpack_require__(/*! youngblood */ "../youngblood/bundle/youngblood.js");
var LoadingIndicatorSystem = {
    systemId: 'labelSystem',
    requiredComponents: ['InputMapping', 'Label'],
    update: function (entity, services) {
        console.log(entity);
        var label = entity['Label'];
        var inputMapping = entity['InputMapping'];
        if (label.isVisible && inputMapping.proceed) {
            services.game.switchToScene('ingame');
        }
    }
};
exports.loading = {
    sceneId: 'loading',
    alwaysInitialize: false,
    init: function (context, services) {
        context.registerSystem(youngblood_1.InputMappingSystem);
        context.registerSystem(LoadingIndicatorSystem);
        var handler = new youngblood_1.Entity();
        handler.addComponent(new youngblood_1.InputMapping([
            { name: 'proceed', code: 13 }
        ]));
        handler.addComponent(new youngblood_1.Label("Loading complete. Press Enter to proceed", {
            isVisible: false,
            color: '#000',
            font: 'Arial'
        }));
        handler.addComponent(new youngblood_1.Position(10, 10));
        context.addEntity(handler);
        services.assets.load('assets/asset_list.json').then(function () { console.log('Assets loaded'); });
    }
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map