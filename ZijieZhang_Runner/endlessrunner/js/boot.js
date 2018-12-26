var bootState = {
	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		console.log("booting complete");
		game.state.start('load'); //simply enable physics and go to loading
	}
}
	