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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/capmaningamemenu/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/capmaningamemenu/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,\"a\",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p=\"\",o(o.s=0)}([function(e,t,o){\"use strict\";o.r(t),o.d(t,\"default\",function(){return u});let n=0;let i=0,r=30;const s=e=>{n--,e.keys.down.isDown&&n<=0?(e.selectedButton=(e.selectedButton+1)%e._buttons.length,n=20):e.keys.up.isDown&&n<=0?(e.selectedButton=(e.selectedButton-1)%e._buttons.length,n=20,e.selectedButton<0&&(e.selectedButton=e._buttons.length-1)):e.keys.fire.isDown&&e.cb(e.config.buttons[e.selectedButton])};class u{constructor(e,t){this.config=e,this.cb=t,this.selectedButton=0}preload(){\"string\"==typeof this.config.background&&this.game.load.image(\"bg\",this.config.background),\"string\"==typeof this.config.logo&&this.game.load.image(\"logo\",this.config.logo)}init(){this.game.renderer.renderSession.roundPixels=!0,this.keys=this.game.input.keyboard.addKeys({down:Phaser.KeyCode.DOWN,up:Phaser.KeyCode.UP,fire:Phaser.KeyCode.CONTROL})}create(){if(this.game.stage.backgroundColor=\"#000033\",\"string\"==typeof this.config.background){let e=this.game.add.image(0,0,\"bg\");e.height=this.game.height,e.width=this.game.width}if(\"string\"==typeof this.config.logo){this.game.add.image(this.game.world.centerX,this.game.world.centerY-300,\"logo\").anchor.set(.5)}let e={font:\"32px KenVector Future\",fill:\"#ffffff\",align:\"center\"},t=0;this._buttons=this.config.buttons.map(o=>{let n=this.game.add.text(this.game.world.centerX,this.game.world.centerY+t,o.text,e);return n.anchor.set(.5),n.stroke=\"#26D8D7\",n.strokeThickness=6,t+=70,n})}update(){s(this),++i>=r&&(this._buttons[this.selectedButton].visible=!this._buttons[this.selectedButton].visible,i=0),this._buttons.forEach((e,t)=>{t!==this.selectedButton&&(e.visible=!0)})}}}])});\n\n//# sourceURL=webpack:///./node_modules/capmaningamemenu/dist/index.js?");

/***/ }),

/***/ "./src/js/heros/hero.js":
/*!******************************!*\
  !*** ./src/js/heros/hero.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hero; });\nclass Hero extends Phaser.Sprite {\r\n    constructor(game, x, y) {\r\n        super(game, x, y, 'hero');\r\n        this.anchor.set(0.5, 0.5);\r\n        this.scale.setTo(0.25, 0.25);\r\n\r\n        const cropRect = new Phaser.Rectangle(75, 60, 385, 466);\r\n\r\n        this.crop(cropRect);\r\n\r\n        this.game.physics.enable(this);\r\n        this.body.collideWorldBounds = true;\r\n        this.body.setSize(280,455)\r\n        this.animations.add('idle', [1, 2, 3, 4, 5, 6, 7, 8, 9], 9, true);\r\n        this.animations.add('run', [21, 22, 23, 24, 25, 26, 27, 28], 10, true);\r\n        this.animations.add('jump', [11, 12, 13, 14, 15]);\r\n        this.animations.add('fall', [16, 17, 18, 19, 20]);\r\n    }\r\n    move(direction) {\r\n        const SPEED = 200;\r\n        this.body.velocity.x = direction * SPEED;\r\n\r\n        if (this.body.velocity.x < 0) {\r\n            this.scale.x = -0.25;\r\n        }\r\n        else if (this.body.velocity.x > 0) {\r\n            this.scale.x = 0.25;\r\n        }\r\n    }\r\n    jump() {\r\n        const JUMP_SPEED = 600;\r\n        let canJump = this.body.touching.down;\r\n    \r\n        if (canJump) {\r\n            this.body.velocity.y = -JUMP_SPEED;\r\n        }\r\n    \r\n        return canJump;\r\n    }\r\n    getAnimationName() {\r\n        let name = 'idle'; // default animation\r\n\r\n        // jumping\r\n        if (this.body.velocity.y < 0) {\r\n            name = 'jump';\r\n        }\r\n        // falling\r\n        else if (this.body.velocity.y >= 0 && !this.body.touching.down) {\r\n            name = 'fall';\r\n        }\r\n        else if (this.body.velocity.x !== 0 && this.body.touching.down) {\r\n            name = 'run';\r\n        }\r\n    \r\n        return name;\r\n    }\r\n    update() {\r\n        let animationName = this.getAnimationName();\r\n        if (this.animations.name !== animationName) {\r\n            this.animations.play(animationName);\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/heros/hero.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var capmaningamemenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! capmaningamemenu */ \"./node_modules/capmaningamemenu/dist/index.js\");\n/* harmony import */ var capmaningamemenu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(capmaningamemenu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _states_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/preload */ \"./src/js/states/preload.js\");\n/* harmony import */ var _states_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/create */ \"./src/js/states/create.js\");\n/* harmony import */ var _states_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/init */ \"./src/js/states/init.js\");\n/* harmony import */ var _utils_inputHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/inputHandler */ \"./src/js/utils/inputHandler.js\");\n/* harmony import */ var _states_update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states/update */ \"./src/js/states/update.js\");\n/* harmony import */ var _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/levelLoader */ \"./src/js/utils/levelLoader.js\");\n/* harmony import */ var _utils_colisionDetector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/colisionDetector */ \"./src/js/utils/colisionDetector.js\");\n// Phaser is side loaded as global!\r\n//var preload = require('./states/preload');\r\n\r\n//import GameMenu from './states/gameMenu';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet PlayState = {};\r\nPlayState.LEVEL_COUNT =2;\r\n\r\n//#TODO i have to clean this up\r\nPlayState.preload = _states_preload__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\nPlayState.init = _states_init__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\nPlayState.create = _states_create__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\nPlayState.update = _states_update__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\r\nPlayState._loadLevel = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_loadLevel\"];\r\nPlayState._spawnPlatform = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnPlatform\"];\r\nPlayState._spawnCharacters = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnCharacters\"];\r\nPlayState._handleInput = _utils_inputHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\nPlayState._handleCollisions = _utils_colisionDetector__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\r\nPlayState._spawnTrap = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnTrap\"];\r\nPlayState._spawnDoor = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnDoor\"];\r\nPlayState._spawnCoin = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnCoin\"];\r\nPlayState._createHud = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_createHud\"];\r\n\r\nwindow.onload = function () {\r\n    let game = new Phaser.Game(1280, 1024, Phaser.AUTO, 'game');\r\n    let gameMenu = new capmaningamemenu__WEBPACK_IMPORTED_MODULE_0___default.a(\r\n        {\r\n            title: 'capman Crashing bugs',\r\n            background: 'assets/img/test/Intro_Screen_background.png',\r\n            logo: 'assets/img/test/CapmanLogo1.svg',\r\n            buttons: [\r\n                {\r\n                    id: 'onePlayer',\r\n                    text: '- start one player -'\r\n                },\r\n                {\r\n                    id: 'twoPlayers',\r\n                    text: '- start two player -'\r\n                },\r\n                {\r\n                    id: 'highScores',\r\n                    text: '- High scores -'\r\n                }\r\n            ]\r\n        },\r\n        (button) =>{\r\n            console.log(button);\r\n            game.state.start('play', true, false, {level: 0}); \r\n        }\r\n    );\r\n\r\n    game.state.add('gameMenu', gameMenu);\r\n    game.state.add('play', PlayState);\r\n    game.state.start('gameMenu', true, false, {level: 0});\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/states/create.js":
/*!*********************************!*\
  !*** ./src/js/states/create.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\r\n\r\n    this.sfx = {\r\n        coin: this.game.add.audio('sfx:coin')\r\n    };\r\n\r\n    this.game.stage.backgroundColor = '#000033';\r\n    //this.game.add.image(0, 0, 'background');\r\n    console.log(this.game.add)\r\n    //tileSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');\r\n    this.game.physics.startSystem(Phaser.Physics.P2JS);\r\n    this._loadLevel(this.game.cache.getJSON(`level:${this.level}`));\r\n    this._createHud();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/states/create.js?");

/***/ }),

/***/ "./src/js/states/init.js":
/*!*******************************!*\
  !*** ./src/js/states/init.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(data)  {\r\n    this.game.renderer.renderSession.roundPixels = true;\r\n    this.scorep1 = 0;\r\n    this.keys = this.game.input.keyboard.addKeys({\r\n        left: Phaser.KeyCode.LEFT,\r\n        right: Phaser.KeyCode.RIGHT,\r\n        up: Phaser.KeyCode.UP\r\n    });\r\n    this.level = (data.level || 0) % this.LEVEL_COUNT;\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/states/init.js?");

/***/ }),

/***/ "./src/js/states/preload.js":
/*!**********************************!*\
  !*** ./src/js/states/preload.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\r\n    this.game.load.json('level:0', 'assets/levels/level00.json');\r\n    this.game.load.json('level:1', 'assets/levels/level01.json');\r\n\r\n    this.game.load.spritesheet('hero', 'assets/img/test/hero-idle.png', 567, 517);\r\n    this.game.load.spritesheet('coin', 'assets/img/test/fullCoins.png', 16, 16);\r\n\r\n    this.game.load.image('icon:coin', 'assets/img/test/coin_icon.png');\r\n    this.game.load.image('font:numbers', 'assets/img/test/numbers.png');\r\n    this.game.load.audio('sfx:coin', 'assets/audio/coin.wav');\r\n\r\n    this.game.load.image('groundStart', 'assets/img/test/Tiles/groundStart.png');\r\n    this.game.load.image('groundMid', 'assets/img/test/Tiles/groundMid.png');\r\n    this.game.load.image('groundEnd', 'assets/img/test/Tiles/groundEnd.png');\r\n    this.game.load.image('platformFull', 'assets/img/test/Tiles/platformFull.png');\r\n    this.game.load.image('halfTile', 'assets/img/test/Tiles/halfTile.png');\r\n    this.game.load.image('spikes', 'assets/img/test/Tiles/Spike.png');\r\n    this.game.load.image('doorOpen', 'assets/img/test/Objects/DoorOpen.png');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/states/preload.js?");

/***/ }),

/***/ "./src/js/states/update.js":
/*!*********************************!*\
  !*** ./src/js/states/update.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\r\n    this._handleCollisions();\r\n    this._handleInput();\r\n    this.coinFont.text = `x${this.scorep1}`;\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/states/update.js?");

/***/ }),

/***/ "./src/js/utils/colisionDetector.js":
/*!******************************************!*\
  !*** ./src/js/utils/colisionDetector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\r\n    this.game.physics.arcade.collide(this.hero, this.platforms);\r\n\r\n    this.game.physics.arcade.overlap(this.hero, this.traps,\r\n        this._onHeroVsEnemy, null, this);\r\n\r\n    this.game.physics.arcade.overlap(this.hero, this.doors,\r\n        this._onHeroVsDoor, null, this);\r\n\r\n    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin,\r\n        null, this);\r\n\r\n    this._onHeroVsEnemy = function (hero, enemy) {\r\n        this.game.state.restart(true, false, {level: this.level});\r\n    };\r\n\r\n    this._onHeroVsDoor = function (hero, enemy) {\r\n        this.game.state.restart(true, false, { level: this.level + 1 });\r\n    };\r\n\r\n    this._onHeroVsCoin = function (hero, coin) {\r\n        this.sfx.coin.play();\r\n        this.scorep1++;\r\n        coin.kill();\r\n    };\r\n});\n\n//# sourceURL=webpack:///./src/js/utils/colisionDetector.js?");

/***/ }),

/***/ "./src/js/utils/inputHandler.js":
/*!**************************************!*\
  !*** ./src/js/utils/inputHandler.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\r\n    this.keys.up.onDown.add(function () {\r\n        this.hero.jump();\r\n    }, this);\r\n    if (this.keys.left.isDown) { // move hero left\r\n        this.hero.move(-1);\r\n    }\r\n    else if (this.keys.right.isDown) { // move hero right\r\n        this.hero.move(1);\r\n    } \r\n    else { // stop\r\n        this.hero.move(0);\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/js/utils/inputHandler.js?");

/***/ }),

/***/ "./src/js/utils/levelLoader.js":
/*!*************************************!*\
  !*** ./src/js/utils/levelLoader.js ***!
  \*************************************/
/*! exports provided: _loadLevel, _spawnPlatform, _spawnTrap, _spawnCharacters, _spawnDoor, _spawnCoin, _createHud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_loadLevel\", function() { return _loadLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnPlatform\", function() { return _spawnPlatform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnTrap\", function() { return _spawnTrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnCharacters\", function() { return _spawnCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnDoor\", function() { return _spawnDoor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnCoin\", function() { return _spawnCoin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_createHud\", function() { return _createHud; });\n/* harmony import */ var _heros_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../heros/hero */ \"./src/js/heros/hero.js\");\n\r\n\r\nfunction _loadLevel(data) {\r\n    this.platforms = this.game.add.group();\r\n    this.traps = this.game.add.group();\r\n    this.doors = this.game.add.group();\r\n    this.coins = this.game.add.group();\r\n    data.platforms.forEach(this._spawnPlatform, this);\r\n    data.doors.forEach(this._spawnDoor, this);\r\n    data.traps.forEach(this._spawnTrap, this);\r\n    data.coins.forEach(this._spawnCoin, this);\r\n    this._spawnCharacters({hero: data.hero});\r\n\r\n    const GRAVITY = 1200;\r\n    this.game.physics.arcade.gravity.y = GRAVITY;\r\n} \r\n\r\nfunction _spawnPlatform (platform) {\r\n\r\n    let sprite = this.platforms.create(\r\n        platform.x, platform.y, platform.image);\r\n    sprite.scale.setTo(0.3, 0.3);\r\n\r\n    if(platform.image === \"platformFull\" || platform.image ===\"halfTile\" ){\r\n        const cropRect = new Phaser.Rectangle(0, 0, 256, 128);\r\n        sprite.crop(cropRect);\r\n    }\r\n\r\n    this.game.physics.enable(sprite);\r\n    sprite.body.allowGravity = false;\r\n    sprite.body.immovable = true;\r\n\r\n}\r\n\r\n\r\nfunction _spawnTrap (trap) {\r\n\r\n    let sprite = this.traps.create(\r\n        trap.x, trap.y, trap.image);\r\n    sprite.scale.setTo(0.3, 0.3);\r\n\r\n    const cropRect = new Phaser.Rectangle(0, 100, 256, 256);\r\n    sprite.crop(cropRect);\r\n\r\n    this.game.physics.enable(sprite);\r\n    sprite.body.allowGravity = false;\r\n    sprite.body.immovable = true;\r\n\r\n}\r\n\r\nfunction _spawnCharacters (data) {\r\n    // spawn hero\r\n    this.hero = new _heros_hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.game, data.hero.x, data.hero.y);\r\n    this.game.add.existing(this.hero);\r\n};\r\n\r\nfunction _spawnDoor (door) {\r\n\r\n    let sprite = this.doors.create(\r\n        door.x, door.y, door.image);\r\n    sprite.scale.setTo(0.3, 0.3);\r\n\r\n    this.game.physics.enable(sprite);\r\n    sprite.body.allowGravity = false;\r\n    sprite.body.immovable = true;\r\n    sprite.body.setSize(100,100)\r\n\r\n}\r\n\r\nfunction _spawnCoin (coin) {\r\n    let sprite = this.coins.create(coin.x, coin.y, 'coin');\r\n    sprite.scale.setTo(2, 2);\r\n    sprite.anchor.set(0.5, 0.5);\r\n    sprite.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7], 9, true); // 6fps, looped\r\n    sprite.animations.play('rotate');\r\n    this.game.physics.enable(sprite);\r\n    sprite.body.allowGravity = false;;\r\n}\r\n\r\nfunction _createHud () {\r\n    this.keyIcon = this.game.make.image(0, 19, 'icon:key');\r\n    this.keyIcon.anchor.set(0, 0.5);\r\n    let coinIcon = this.game.make.image(this.keyIcon.width + 7, 0, 'icon:coin');\r\n    const NUMBERS_STR = '0123456789X ';\r\n    this.coinFont = this.game.add.retroFont('font:numbers', 20, 26,\r\n        NUMBERS_STR, 6);\r\n\r\n    let coinScoreImg = this.game.make.image(coinIcon.x + coinIcon.width,\r\n        coinIcon.height / 2, this.coinFont);\r\n    coinScoreImg.anchor.set(0, 0.5);\r\n\r\n    this.hud = this.game.add.group();\r\n    this.hud.add(coinIcon);\r\n    this.hud.position.set(10, 10);\r\n    this.hud.add(coinScoreImg);\r\n    this.hud.add(this.keyIcon);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/utils/levelLoader.js?");

/***/ })

/******/ });