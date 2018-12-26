var winstate = {
	create:function(){
		var win = game.add.text(80,80,'YOU WON', {font:'50px Arial', fill:'#00FF00'});
		var startagain = game.add.text(80,game.world.height-80,'press the g to restart',{font:'25px Arial', fill:'#ffffff'});
		var key = game.input.keyboard.addKey(phaser.Keyboard.G);
		key.onDown.addOnce(this.restart,this);
	}, // show you win text
	
	restart:function(){
		game.state.start('menu');
		console.log("win finished, moving to menu"); //go to menu state
	},
}
	