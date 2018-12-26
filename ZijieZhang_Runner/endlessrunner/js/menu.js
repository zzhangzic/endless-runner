var menustate = {
	create:function(){
		var name = game.add.text(80,80,'First Endless Runnner Game',{font:'50px Arial', fill:'#ffffff'});
		game.add.text(100,250,'Created by Zijie Zhang',{font:'50px Arial', fill:'#ffffff'});
		var start = game.add.text(80,game.world.height-80,'press the G key to start',{font:'25px Arial',fill:'#ffffff'});
		var start = game.add.text(50,310,'cursors to move, shift to do superjump',{font:'25px Arial',fill:'#ffffff'});
		game.add.text(50,340,'stars:10points, diamond:200points, try to avoid bees',{font:'25px Arial',fill:'#ffffff'});
		var gkey = game.input.keyboard.addKey(Phaser.Keyboard.G);
		gkey.onDown.addOnce(this.start,this);
	}, //press g to continue and print out neccessary things
	
	start:function(){
		game.state.start('play');
		console.log("menu complete"); //check and go to play state
	}
}
	