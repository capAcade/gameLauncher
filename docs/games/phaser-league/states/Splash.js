var Splash = function () {};

Splash.prototype = {

  loadScripts: function () {
    game.load.script('style', 'lib/style.js');
    game.load.script('mixins', 'lib/mixins.js');
    game.load.script('WebFont', 'vendor/webfontloader.js');
    game.load.script('gamemenu','states/GameMenu.js');
    game.load.script('game', 'states/Game.js');
    game.load.script('gameover','states/GameOver.js');
    game.load.script('credits', 'states/Credits.js');
    game.load.script('options', 'states/Options.js');
  },

  loadBgm: function () {
    game.load.audio('backgroundSound', 'assets/sound/8-Bit-Mayhem.mp3');
  },
  loadImages: function () {
    game.load.image('menu-bg', 'assets/images/menu-bg.jpg');
    game.load.image('options-bg', 'assets/images/options-bg.jpg');
    game.load.image('gameover-bg', 'assets/images/gameover-bg.jpg');
  },

  loadFonts: function () {
    WebFontConfig = {
      custom: {
        families: ['TheMinion'],
        urls: ['assets/style/theminion.css']
      }
    }
  },

  init: function () {
    this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loading");
    this.logo = game.make.sprite(game.world.centerX, 200, 'PHASER LEAGUE');
    this.status = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
    utils.centerGameObjects([this.logo, this.status]);
  },

  preload: function () {
    game.add.sprite(0, 0, 'splash-bg');
    game.add.existing(this.logo).scale.setTo(0.5);
    game.add.existing(this.loadingBar);
    game.add.existing(this.status);
    this.load.setPreloadSprite(this.loadingBar);

    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();

  },

  addGameStates: function () {
    game.state.add("GameMenu",GameMenu);
    game.state.add("Game",Game);
    game.state.add("GameOver",GameOver);
    game.state.add("Credits",Credits);
    game.state.add("Options",Options);
  },

  addGameMusic: function () {
    music = game.add.audio('backgroundSound');
    music.loop = true;
    music.play();
  },

  create: function() {
    this.status.setText('Ready!');
    this.addGameStates();
    this.addGameMusic();

    game.state.start("GameMenu");
  }
};
