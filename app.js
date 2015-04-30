
var game = new Phaser.Game(500, 300, Phaser.CANVAS, 'content', { create: create });

function cir(x, y, r) {
	var c = game.add.graphics(x, y)
	c.beginFill(0xffffff)
	c.drawCircle(0, 0, r)
	return c
}

function callback() {
	var text = 'Hide\n& Seek'
	var style = { font: '78px Droid Sans', fill: '#ff9900', align: 'left' }

	var c1 = cir(150, 120, 190)
	var c2 = cir(290, 80, 80)
	var c3 = cir(320, 190, 140)


	var t = game.add.text(0, 0, text, style)
	t.x = game.world.centerX - t.width / 2
	t.y = game.world.centerY - t.height / 2 - 20

	// Prepare
	/*
	c1.alpha = 0
	c2.alpha = 0
	c3.alpha = 0
	game.add.tween(c1).to({alpha: 1}, 400).start()
	game.add.tween(c2).to({alpha: 1}, 400).start()
	game.add.tween(c3).to({alpha: 1}, 400).start()
	//*/

	//* Scale
	c1.scale.set(0, 0)
	c2.scale.set(0, 0)
	c3.scale.set(0, 0)
	game.add.tween(c1.scale).to({x: 1, y: 1}, 800, Phaser.Easing.Elastic.Out).delay(100).start()
	game.add.tween(c2.scale).to({x: 1, y: 1}, 800, Phaser.Easing.Elastic.Out).start()
	game.add.tween(c3.scale).to({x: 1, y: 1}, 800, Phaser.Easing.Elastic.Out).delay(200).start()
	//*/

	// Anim
	game.add.tween(c1).to({y: '+20'}, 6000, Phaser.Easing.Quadratic.InOut).to({y: '-20'}, 6000, Phaser.Easing.Quadratic.InOut).loop().start()
	game.add.tween(c2).to({y: '-10'}, 4000, Phaser.Easing.Quadratic.InOut).to({y: '+10'}, 4000, Phaser.Easing.Quadratic.InOut).loop().start()
	game.add.tween(c3).to({y: '+30'}, 5000, Phaser.Easing.Quadratic.InOut).to({y: '-30'}, 5000, Phaser.Easing.Quadratic.InOut).loop().start()

}

function create() {

	game.stage.disableVisibilityChange = true
	game.stage.backgroundColor = '#ff9900'

	var style = { font: '65px Droid Sans', fill: '#ffffff', align: 'left' }
	var t = game.add.text(0, 0, 'void', style)
	t.destroy()

	setTimeout(callback, 1000)

}
