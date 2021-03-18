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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Components provide entities with attributes
 * that relate to in-game functionality.
 * Like entities, components are JUST DATA and not logic!
 */
var Component = /** @class */ (function () {
    function Component(name) {
        this.name = name;
    }
    return Component;
}());
exports.default = Component;
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position(x, y) {
        var _this = _super.call(this, 'Position') || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    return Position;
}(Component));
exports.Position = Position;
var Velocity = /** @class */ (function (_super) {
    __extends(Velocity, _super);
    function Velocity(x, y) {
        var _this = _super.call(this, 'Velocity') || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    return Velocity;
}(Component));
exports.Velocity = Velocity;
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(txt, options) {
        var _this = _super.call(this, 'Label') || this;
        _this.txt = txt;
        _this.color = options.color || '#000';
        _this.font = options.font || 'monospace';
        _this.isVisible = options.isVisible || true;
        return _this;
    }
    return Label;
}(Component));
exports.Label = Label;
var Sprite = /** @class */ (function (_super) {
    __extends(Sprite, _super);
    function Sprite(spriteSource) {
        var _this = _super.call(this, 'Sprite') || this;
        _this.spriteSource = spriteSource;
        return _this;
    }
    return Sprite;
}(Component));
exports.Sprite = Sprite;
var AnimatedSprite = /** @class */ (function (_super) {
    __extends(AnimatedSprite, _super);
    function AnimatedSprite(spriteSource, animationSheet, options) {
        var _this = _super.call(this, 'AnimatedSprite') || this;
        _this.spriteSource = spriteSource;
        _this.animationSheet = animationSheet;
        if (options === undefined)
            var options = {};
        // If there's no default animation set, we'll use the first one defined in the JSON object
        _this.animationName = options.animationName || Object.keys(animationSheet)[0];
        _this.scale = options.scale || 1.0;
        _this.loop = options.loop || true;
        _this.isPlaying = options.isPlaying || true;
        _this.flip = options.flip || false;
        _this.currentFrame = 0;
        return _this;
    }
    return AnimatedSprite;
}(Component));
exports.AnimatedSprite = AnimatedSprite;
var AudioSource = /** @class */ (function (_super) {
    __extends(AudioSource, _super);
    function AudioSource(audioBuffer) {
        var _this = _super.call(this, 'AudioSource') || this;
        _this.audioBuffer = audioBuffer;
        return _this;
    }
    return AudioSource;
}(Component));
exports.AudioSource = AudioSource;
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(width, height, fillStyle) {
        var _this = _super.call(this, 'Box') || this;
        _this.width = width;
        _this.height = height;
        _this.fillStyle = fillStyle;
        return _this;
    }
    return Box;
}(Component));
exports.Box = Box;
var BoxCollider = /** @class */ (function (_super) {
    __extends(BoxCollider, _super);
    function BoxCollider(width, height) {
        var _this = _super.call(this, 'BoxCollider') || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return BoxCollider;
}(Component));
exports.BoxCollider = BoxCollider;
var InputMapping = /** @class */ (function (_super) {
    __extends(InputMapping, _super);
    // for eg. mapping = [ {name: 'up', code: 38} ]
    function InputMapping(mapping) {
        var _this = _super.call(this, 'InputMapping') || this;
        _this.mapping = mapping;
        for (var i = 0; i < mapping.length; i++) {
            _this[mapping[i].name] = false;
        }
        return _this;
    }
    return InputMapping;
}(Component));
exports.InputMapping = InputMapping;


/***/ }),
/* 1 */
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
    Scene.prototype.removeEntity = function (id) {
        delete this.gameEntities[id];
    };
    return Scene;
}());
exports.Scene = Scene;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(3);
exports.Game = game_1.default;
var scene_1 = __webpack_require__(1);
exports.Scene = scene_1.Scene;
var entity_1 = __webpack_require__(8);
exports.Entity = entity_1.default;
var component_1 = __webpack_require__(0);
exports.Position = component_1.Position;
exports.Velocity = component_1.Velocity;
exports.Sprite = component_1.Sprite;
exports.AnimatedSprite = component_1.AnimatedSprite;
exports.Box = component_1.Box;
exports.InputMapping = component_1.InputMapping;
exports.Label = component_1.Label;
var tiledMap_1 = __webpack_require__(9);
exports.TiledMap = tiledMap_1.default;
var component_2 = __webpack_require__(0);
exports.Component = component_2.default;
var system_1 = __webpack_require__(10);
exports.InputMappingSystem = system_1.InputMappingSystem;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scene_1 = __webpack_require__(1);
var inputmanager_1 = __webpack_require__(4);
var audiomanager_1 = __webpack_require__(5);
var assetloader_1 = __webpack_require__(6);
var renderer_1 = __webpack_require__(7);
var Game = /** @class */ (function () {
    /**
     * Returns a new `Game` instance.
     */
    function Game() {
        this.renderer = null;
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
            var entity = this.currentScene.gameEntities[e];
            for (var s in this.currentScene.systems) {
                var system = this.currentScene.systems[s];
                if (entity.hasComponents(system.requiredComponents))
                    system.update(entity, this.currentScene, this.services);
            }
        }
    };
    return Game;
}());
exports.default = Game;


/***/ }),
/* 4 */
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
/* 5 */
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
            this.effectsVolume = this.audioContext.createGain();
            this.musicVolume.connect(this.masterVolume);
            this.effectsVolume.connect(this.masterVolume);
            this.masterVolume.connect(this.audioContext.destination);
        }
        catch (e) {
            console.error(e);
        }
    }
    AudioManager.prototype.setBackgroundMusic = function (buffer, loop) {
        var _this = this;
        if (this.songsPlaying.indexOf(buffer) == -1) {
            var source = this.audioContext.createBufferSource();
            source.buffer = buffer;
            source.loop = loop || false;
            source.connect(this.musicVolume);
            source.start();
            source.onended = function () {
                if (!loop)
                    _this.songsPlaying.splice(_this.songsPlaying.indexOf(buffer), 1);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function fetchTiledMap(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, result, _i, _a, layer, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _g.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _g.sent();
                    result = {
                        width: data.width,
                        height: data.height,
                        layers: [],
                    };
                    _i = 0, _a = data.layers;
                    _g.label = 3;
                case 3:
                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                    layer = _a[_i];
                    _b = layer.type;
                    switch (_b) {
                        case 'imagelayer': return [3 /*break*/, 4];
                        case 'tilelayer': return [3 /*break*/, 6];
                        case 'objectgroup': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 4:
                    _d = (_c = result.layers).push;
                    _e = [__assign({}, layer)];
                    _f = {};
                    return [4 /*yield*/, fetchImage(layer.image)];
                case 5:
                    _d.apply(_c, [__assign.apply(void 0, _e.concat([(_f.image = _g.sent(), _f)]))]);
                    return [3 /*break*/, 8];
                case 6:
                    result.layers.push(__assign(__assign({}, layer), { data: layer.data }));
                    return [3 /*break*/, 8];
                case 7:
                    result.layers.push(__assign(__assign({}, layer), { objects: layer.objects }));
                    return [3 /*break*/, 8];
                case 8:
                    _i++;
                    return [3 /*break*/, 3];
                case 9: return [2 /*return*/, result];
            }
        });
    });
}
function fetchTiledSet(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _c.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _c.sent();
                    _a = [__assign({}, data)];
                    _b = {};
                    return [4 /*yield*/, fetchImage(data.image)];
                case 3: return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.image = _c.sent(), _b)]))];
            }
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
            var extension, assetName, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        extension = getExtension(asset.url);
                        assetName = asset.url.replace(extension, '');
                        _a = asset.type;
                        switch (_a) {
                            case 'audio': return [3 /*break*/, 1];
                            case 'image': return [3 /*break*/, 3];
                            case 'json': return [3 /*break*/, 5];
                            case 'tiled-map': return [3 /*break*/, 7];
                            case 'tiled-set': return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 11];
                    case 1:
                        _b = this.assets;
                        _c = assetName;
                        return [4 /*yield*/, fetchAudio(asset.url)];
                    case 2:
                        _b[_c] = _m.sent();
                        return [3 /*break*/, 11];
                    case 3:
                        _d = this.assets;
                        _e = assetName;
                        return [4 /*yield*/, fetchImage(asset.url)];
                    case 4:
                        _d[_e] = _m.sent();
                        return [3 /*break*/, 11];
                    case 5:
                        _f = this.assets;
                        _g = assetName;
                        return [4 /*yield*/, fetchObject(asset.url)];
                    case 6:
                        _f[_g] = _m.sent();
                        return [3 /*break*/, 11];
                    case 7:
                        _h = this.assets;
                        _j = assetName;
                        return [4 /*yield*/, fetchTiledMap(asset.url)];
                    case 8:
                        _h[_j] = _m.sent();
                        return [3 /*break*/, 11];
                    case 9:
                        _k = this.assets;
                        _l = assetName;
                        return [4 /*yield*/, fetchTiledSet(asset.url)];
                    case 10:
                        _k[_l] = _m.sent();
                        _m.label = 11;
                    case 11:
                        this.completedTasks++;
                        return [2 /*return*/];
                }
            });
        });
    };
    return AssetLoader;
}());
exports.default = AssetLoader;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function renderBox(p, b, ctx) {
    ctx.fillStyle = b.fillStyle;
    ctx.fillRect(p.x, p.y, b.width, b.height);
}
function renderLabel(p, l, ctx) {
    ctx.fillStyle = l.color;
    ctx.fillText(l.txt, p.x, p.y);
}
function renderSprite(p, s, ctx) {
    ctx.drawImage(s.spriteSource, p.x, p.y);
}
function renderAnimatedSprite(p, sprite, ctx) {
    var f = sprite.animationSheet[sprite.animationName];
    if (sprite.flip) {
        ctx.translate(p.x, 0);
        ctx.scale(-1, 1);
    }
    ctx.drawImage(sprite.spriteSource, f.startX + sprite.currentFrame * f.frameWidth, f.startY, f.frameWidth, f.frameHeight, sprite.flip ? -sprite.scale * f.frameWidth : p.x, p.y, f.frameWidth * sprite.scale, f.frameHeight * sprite.scale);
    if (sprite.flip)
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (sprite.isPlaying) {
        if (sprite.currentFrame >= f.frames - 1)
            sprite.currentFrame = 0;
        else
            sprite.currentFrame++;
    }
}
function renderImageLayer(position, layer, ctx) {
    ctx.drawImage(layer.image, position.x + layer.x, position.y + layer.y, ctx.canvas.width, ctx.canvas.height);
}
function getTileById(id, sheet) {
    return {
        x: (id % sheet.columns) * sheet.tilewidth - sheet.tilewidth,
        y: Math.floor(id / sheet.columns) * sheet.tileheight,
    };
}
function renderTileLayer(position, layer, sheet, scalingFactor, ctx) {
    for (var i = 0; i < layer.data.length; i++) {
        if (layer.data[i] === 0)
            continue;
        var _a = getTileById(layer.data[i], sheet), x = _a.x, y = _a.y;
        ctx.drawImage(sheet.image, x, y, sheet.tilewidth, sheet.tileheight, position.x + (i % layer.width) * (sheet.tilewidth * scalingFactor), position.y + Math.floor(i / layer.width) * (sheet.tileheight * scalingFactor), sheet.tilewidth * scalingFactor, sheet.tileheight * scalingFactor);
    }
}
function renderTiledMap(position, map, ctx) {
    for (var _i = 0, _a = map.data.layers; _i < _a.length; _i++) {
        var layer = _a[_i];
        switch (layer.type) {
            case 'imagelayer':
                renderImageLayer(position, layer, ctx);
                break;
            case 'tilelayer':
                renderTileLayer(position, layer, map.spriteSheet, map.options.scale, ctx);
                break;
        }
    }
}
exports.default = (function (ctx) { return function (scene) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (var _i = 0, _a = Object.values(scene.gameEntities).filter(function (e) { return e.hasComponent('Position'); }); _i < _a.length; _i++) {
        var currentEntity = _a[_i];
        var position = currentEntity.get('Position');
        if (currentEntity.hasComponent('Box'))
            renderBox(position, currentEntity.get('Box'), ctx);
        if (currentEntity.hasComponent('Label'))
            renderLabel(position, currentEntity.get('Label'), ctx);
        if (currentEntity.hasComponent('Sprite'))
            renderSprite(position, currentEntity.get('Sprite'), ctx);
        if (currentEntity.hasComponent('AnimatedSprite'))
            renderAnimatedSprite(position, currentEntity.get('AnimatedSprite'), ctx);
        if (currentEntity.hasComponent('TiledMap'))
            renderTiledMap(position, currentEntity.get('TiledMap'), ctx);
    }
}; });


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity() {
        this.id = Entity.prototype.count;
        Entity.prototype.count++;
    }
    Entity.prototype.addComponent = function (component) {
        this[component.name] = component;
    };
    Entity.prototype.removeComponent = function (componentName) {
        delete this[componentName];
    };
    Entity.prototype.hasComponent = function (componentName) {
        return this[componentName] != null;
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
            case 'Label':
                return this[name];
            case 'Box':
                return this[name];
            case 'TiledMap':
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(0);
var TiledMap = /** @class */ (function (_super) {
    __extends(TiledMap, _super);
    function TiledMap(data, spriteSheet, options) {
        if (options === void 0) { options = { scale: 1 }; }
        var _this = _super.call(this, 'TiledMap') || this;
        _this.data = data;
        _this.spriteSheet = spriteSheet;
        _this.options = options;
        return _this;
    }
    return TiledMap;
}(component_1.default));
exports.default = TiledMap;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMappingSystem = {
    systemId: 'inputMappingSystem',
    requiredComponents: ['InputMapping'],
    update: function (entity, scene, services) {
        var inputMapping = entity['InputMapping'];
        for (var i = 0; i < inputMapping.mapping.length; i++) {
            var c = inputMapping.mapping[i];
            inputMapping[c.name] = services.input.isPressed(c.code);
        }
    },
};
exports.TiledMapSystem = {
    systemId: 'tiledMapSystem',
    requiredComponents: ['TiledMap', 'Position', 'InputMapping'],
    update: function (entity, scene, services) {
        var mapData = entity['TiledMap'];
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
new youngblood_1.Game()
    .addScene(loading_1.loading)
    .addScene(ingame_1.ingame)
    .setFramerate(20)
    .startRendering();


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
        var tileset = services.assets.get('assets/forest_tileset');
        var tilemap = services.assets.get('assets/forest');
        var map = new youngblood_1.Entity();
        map.addComponent(new youngblood_1.Position(0, 0));
        map.addComponent(new youngblood_1.TiledMap(tilemap, tileset, { scale: 2.5 }));
        context.addEntity(map);
        var wolf_sheet = services.assets.get('assets/80x48Wolf_FullSheet');
        var wolf_info = services.assets.get('assets/wolf_info');
        var wolf = new youngblood_1.Entity();
        wolf.addComponent(new youngblood_1.Position(100, 380));
        wolf.addComponent(new youngblood_1.InputMapping([
            { name: 'right', code: 39 },
            { name: 'left', code: 37 }
        ]));
        wolf.addComponent(new youngblood_1.AnimatedSprite(wolf_sheet, wolf_info, {
            animationName: 'idle',
            isPlaying: true,
            loop: true,
            scale: 3.0
        }));
        context.addEntity(wolf);
    }
};
var wolfMovementSystem = {
    systemId: 'wolfMovementSystem',
    requiredComponents: ['AnimatedSprite', 'Position', 'InputMapping'],
    update: function (entity, scene, services) {
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
    update: function (entity, scene, services) {
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