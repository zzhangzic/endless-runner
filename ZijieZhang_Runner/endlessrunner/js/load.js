var loadstate = {
		preload:function(){
		var loading = game.add.text(80,150,'loading... Please wait patiently',{font:'30px Courier',fill:'#ffffff'});
		game.load.image('background1','assets/img/background1.png');
		game.load.image('background1b','assets/img/background1b.png');
		game.load.image('background2','assets/img/background2.png');
		game.load.image('background2b','assets/img/background2b.png');
		game.load.image('diamond','assets/img/diamond.png');
		game.load.image('platform','assets/img/platform.png');
		game.load.image('platform2','assets/img/platform2.png');
		game.load.image('star','assets/img/star.png');
		game.load.image('black','assets/img/black.jpg');
		game.load.spritesheet('valkyrie','assets/img/valkyrie.png',49,56);
		game.load.spritesheet('jumpvalkyrie','assets/img/jump.png',37.3,21.6);
		game.load.spritesheet('shootvalkyrie','assets/img/shoot.png',80,59);
		game.load.spritesheet('slidevalkyrie','assets/img/jump.png',57,46);
		game.load.spritesheet('snowflakes', 'assets/img/snowflakes.png', 17, 17);
		game.load.spritesheet('snowflakes_large', 'assets/img/snowflakes_large.png', 64, 64);//load all neccessary sprite
		game.load.audio('bmusic1','assets/audio/bmusic1.ogg');
		game.load.audio('bmusic2','assets/audio/bmusic2.mp3');
		game.load.audio('firemusic','assets/audio/firemusic.mp3');
		game.load.audio('jumpmusic','assets/audio/jumpmusic.mp3');
		game.load.audio('slidemusic','assets/audio/slidemusic.mp3');
		game.load.audio('runmusic','assets/audio/runmusic.mp3');
		game.load.audio('diamondc','assets/audio/diamondc.wav');
		game.load.audio('starc','assets/audio/starc.wav');
		console.log("loading complete");
		game.state.start('menu'); //go to menu state
		},
		create:function(){
			game.load.start();
		}
}


	