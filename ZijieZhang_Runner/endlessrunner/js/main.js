var game = new Phaser.Game(900, 768, Phaser.CANVAS, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load',loadstate);
game.state.add('menu',menustate);
game.state.add('play',playstate);
game.state.add('win',winstate);
//game.state.add('lose',losestate);
game.state.start('boot');
function preload() {
	// preload assets
}

function create() {
	// place your assets
}

function update() {
	// run game loop
}