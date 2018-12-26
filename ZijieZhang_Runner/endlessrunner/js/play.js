var playstate = {
	
	create:function(){
		this.background = this.game.add.tileSprite(0,0,game.width,game.height,'black'); //create background
		cursors = game.input.keyboard.createCursorKeys();
		player = game.add.sprite(49, game.world.height - 150,'valkyrie');
		musica = game.add.audio('bmusic1');
		musicb = game.add.audio('bmusic2');
		diamondc = game.add.audio('diamondc');
		starc = game.add.audio('starc');
		soundjump = game.add.audio('jumpmusic');
		soundslide = game.add.audio('slidemusic');
		soundfire = game.add.audio('firemusic');
		sounds = [musica,musicb];
		soundjump.volume = 0.2;
		musica.loop = true;
		musica.volume = 0.6;
		musica.play();
		
		game.physics.arcade.enable(player); //enable physics to players
		player.body.bounce.y = 0.2; //make player bounce back
		player.body.gravity.y = 300; //make player have gravity
		player.body.collideWorldBounds = true; //let player cannot walk out of screen
		player.animations.add('left',[8,7,6,5,4,3,2,1,0],8,true); //left animations
		
		scoreText = game.add.text(16,16,'score:' +this.score,{fontSize:'32px',fill:'#000'});
		this.score = 0;
		
		game.renderer.renderSession.roundPixels = true; 
		Phaser.Canvas.setImageRenderingCrisp(game.canvas);
		
		boards = game.add.group();
		boards.enableBody = true;
		diamonds = game.add.group();
		diamonds.enableBody = true;
		stars = game.add.group();
		stars.enableBody = true;
		
		var reward = game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.spawnreward, this);
		reward.loop = true;
		var enemy = game.time.events.repeat(Phaser.Timer.SECOND * 5, 1, this.creatething, this);
		enemy.loop = true;
		game.physics.arcade.collide(stars,this.platforms);
		game.physics.arcade.collide(stars,diamonds);
		game.physics.arcade.collide(diamonds,this.platforms);
	},
	update:function(){
		if(this.score >500){this.background.loadTexture('background1b');}
		if(this.score >1500){this.background.loadTexture('background1');}
		if(this.score >2500){this.background.loadTexture('background2b');}
		if(this.score >3500){this.background.loadTexture('background2');}
		game.physics.arcade.overlap(player,stars,this.collectStar,null,this);
		game.physics.arcade.overlap(player,diamonds,this.collectDiamond,null,this);
		game.physics.arcade.overlap(player,boards,this.hitplayer,null,this);
		scoreText.text = 'score: ' +this.score;
		this.score +=1;
		this.playermove();
		this.background.tilePosition.x -=3;
	},
	playermove:function(){
		player.body.velocity.x = 0;
		player.body.velocity.x += 50; 
		if(cursors.left.isDown){
			player.body.velocity.x -=300;
			player.animations.play('left');
		} //display left animation when left is pressed
		else if(cursors.right.isDown){
			player.body.velocity.x += 350;
			player.animations.play('left');
		}
		else if(cursors.down.isDown && player.body.y!=0){
			player.body.velocity.y = 550;
		}
		else{
			player.animations.play('left');
		}
		if(cursors.up.isDown && player.body.onFloor()){
			player.body.velocity.y = -550;
			soundjump.play();
		}
		else if(player.body.onFloor() && cursors.up.shiftKey){
			player.body.velocity.y = -750;
			soundfire.play();
		}
	},
	creatething:function(){
		var random3 = game.rnd.integerInRange(200,550);
		var board = game.add.sprite(900,random3,'platform');
		boards.add(board);
		game.physics.arcade.enable(board);
		board.body.velocity.x =-100;
		board.checkWorldBounds = true;
		board.outOfBoundsKill = true;
	},
	spawnreward:function(){
		var random1 = game.rnd.integerInRange(0,750);
		var random2 = game.rnd.frac();
		if(random2>0.8){
			diamond = game.add.sprite(900, random1,'diamond');
			diamonds.add(diamond);
			game.physics.arcade.enable(diamond);
			diamond.body.velocity.x =-300;
		}
		else{
			star = game.add.sprite(900, random1,'star');
			stars.add(star);
			game.physics.arcade.enable(star);
			star.body.velocity.x =-600;
		}
	},
	collectStar:function(player,star){
		star.kill(); //eliminate stars
		this.score += 10; //++score
		starc.play();
	},
	collectDiamond:function(player,diamond){
		diamond.kill();
		this.score += 200;
		diamondc.play();
	},
	hitplayer:function(player,board){
		musica.pause();
		player.kill();
		 //add game over text
		var gameover = game.add.text(game.width/2, game.height/2, 'scored ' + this.score + ' points', {fontSize: '96px', fill: '0XFFFF33'});
		var gameover2 = game.add.text(80,game.world.height-80,'press the G key to restart',{font:'25px Arial',fill:'#ffffff'});
		gameover.anchor.set(0.5);
		var gkey = game.input.keyboard.addKey(Phaser.Keyboard.G);
		gkey.onDown.addOnce(this.next,this);
	},
	next:function(){
		game.state.start('play');
	}
}