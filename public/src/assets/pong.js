// Code from:
// https://github.com/maxwihlborg/youtube-tutorials/blob/master/pong/index.html

var
/**
 * Constants
 */
WIDTH  = 560,
HEIGHT = 460,
pi = Math.PI,
UpArrow   = 38,
DownArrow = 40,
/**
 * Game elements
 */
canvas,
ctx,
keystate,
/**
 * The player paddle
 * 
 * @type {Object}
 */
player = {
	x: null,
	y: null,
	width:  20,
	height: 100,
	/**
	 * Update the position depending on pressed keys
	 */
	update: function() {
		if (keystate[UpArrow]) this.y -= 7;
		if (keystate[DownArrow]) this.y += 7;
		// keep the paddle inside of the canvas
		this.y = Math.max(Math.min(this.y, HEIGHT - this.height), 0);
	},
	/**
	 * Draw the player paddle to the canvas
	 */
	draw: function() {
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
},
/**
 * The ai paddle
 * 
 * @type {Object}
 */
ai = {
	x: null,
	y: null,
	width:  20,
	height: 100,
	/**
	 * Update the position depending on the ball position
	 */
	update: function() {
		// calculate ideal position
		var desty = ball.y - (this.height - ball.side)*0.5;
		// ease the movement towards the ideal position
		this.y += (desty - this.y) * 0.1;
		// keep the paddle inside of the canvas
		this.y = Math.max(Math.min(this.y, HEIGHT - this.height), 0);
	},
	/**
	 * Draw the ai paddle to the canvas
	 */
	draw: function() {
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
},
/**	
 * The ball object
 * 
 * @type {Object}
 */
ball = {
	x:   null,
	y:   null,
	vel: null,
	side:  20,
	speed: 12,
	/**
	 * Serves the ball towards the specified side
	 * 
	 * @param  {number} side 1 right
	 *                       -1 left
	 */
	serve: function(side) {
		// set the x and y position
		var r = Math.random();
		this.x = side===1 ? player.x+player.width : ai.x - this.side;
		this.y = (HEIGHT - this.side)*r;
		// calculate out-angle, higher/lower on the y-axis =>
		// steeper angle
		var phi = 0.1*pi*(1 - 2*r);
		// set velocity direction and magnitude
		this.vel = {
			x: side*this.speed*Math.cos(phi),
			y: this.speed*Math.sin(phi)
		}
	},
	/**
	 * Update the ball position and keep it within the canvas
	 */
	update: function() {
		// update position with current velocity
		this.x += this.vel.x;
		this.y += this.vel.y;
		// check if out of the canvas in the y direction
		if (0 > this.y || this.y+this.side > HEIGHT) {
			// calculate and add the right offset, i.e. how far
			// inside of the canvas the ball is
			var offset = this.vel.y < 0 ? 0 - this.y : HEIGHT - (this.y+this.side);
			this.y += 2*offset;
			// mirror the y velocity
			this.vel.y *= -1;
		}
		// helper function to check intesectiont between two
		// axis aligned bounding boxex (AABB)
		var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh) {
			return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
		};
		// check againts target paddle to check collision in x
		// direction
		var pdle = this.vel.x < 0 ? player : ai;
		if (AABBIntersect(pdle.x, pdle.y, pdle.width, pdle.height,
				this.x, this.y, this.side, this.side)
		) {	
			// set the x position and calculate reflection angle
			this.x = pdle===player ? player.x+player.width : ai.x - this.side;
			var n = (this.y+this.side - pdle.y)/(pdle.height+this.side);
			var phi = 0.25*pi*(2*n - 1); // pi/4 = 45
			// calculate smash value and update velocity
			var smash = Math.abs(phi) > 0.2*pi ? 1.5 : 1;
			this.vel.x = smash*(pdle===player ? 1 : -1)*this.speed*Math.cos(phi);
			this.vel.y = smash*this.speed*Math.sin(phi);
		}
		// reset the ball when ball outside of the canvas in the
		// x direction
		if (0 > this.x+this.side || this.x > WIDTH) {
			this.serve(pdle===player ? 1 : -1);
		}
	},
	/**
	 * Draw the ball to the canvas
	 */
	draw: function() {
		ctx.fillRect(this.x, this.y, this.side, this.side);
	}
};
/**
 * Starts the game
 */
function main() {
	// create, initiate and append game canvas
	canvas = document.createElement("canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	ctx = canvas.getContext("2d");
	//document.body.appendChild(canvas);
    document.getElementById("canvas").appendChild(canvas); // replaces the above
	keystate = {};
	// keep track of keyboard presses
	document.addEventListener("keydown", function(evt) {
		keystate[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keystate[evt.keyCode];
	});
	init(); // initiate game objects
	// game loop function
	var loop = function() {
		update();
		draw();
		window.requestAnimationFrame(loop, canvas);
	};
	window.requestAnimationFrame(loop, canvas);
}
/**
 * Initatite game objects and set start positions
 */
function init() {
	player.x = player.width;
	player.y = (HEIGHT - player.height)/2;
	ai.x = WIDTH - (player.width + ai.width);
	ai.y = (HEIGHT - ai.height)/2;
	ball.serve(1);
}
/**
 * Update all game objects
 */
function update() {
	ball.update();
	player.update();
	ai.update();
}
/**
 * Clear canvas and draw all game objects and net
 */
function draw() {
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.save();
	ctx.fillStyle = "#fff";
	ball.draw();
	player.draw();
	ai.draw();
	// draw the net
	var w = 4;
	var x = (WIDTH - w)*0.5;
	var y = 0;
	var step = HEIGHT/20; // how many net segments
	while (y < HEIGHT) {
		ctx.fillRect(x, y+step*0.25, w, step*0.5);
		y += step;
	}
	ctx.restore();
}
// start and run the game
// main();

////////////

// console.log("index loaded");

// var sun = new Image();
// var moon = new Image();
// var earth = new Image();
// function init() {
//   sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
//   moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
//   earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
//   window.requestAnimationFrame(draw);
// }

// function draw() {
//     var canvas = document.createElement('canvas');
//     var width = 560;
//     var height = 460;
//     canvas.width = width;
//     canvas.height = height;
//     var ctx = canvas.getContext('2d');
//     // insert the canvas into the game space
//     document.getElementById("canvas").appendChild(canvas);
// //   var ctx = document.getElementById('canvas').getContext('2d');

//   ctx.globalCompositeOperation = 'destination-over';
//   ctx.clearRect(0, 0, 300, 300); // clear canvas

//   ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
//   ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
//   ctx.save();
//   ctx.translate(150, 150);

//   // Earth
//   var time = new Date();
//   ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
//   ctx.translate(105, 0);
//   ctx.fillRect(0, -12, 50, 24); // Shadow
//   ctx.drawImage(earth, -12, -12);

//   // Moon
//   ctx.save();
//   ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
//   ctx.translate(0, 28.5);
//   ctx.drawImage(moon, -3.5, -3.5);
//   ctx.restore();

//   ctx.restore();
  
//   ctx.beginPath();
//   ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
//   ctx.stroke();
 
//   ctx.drawImage(sun, 0, 0, 300, 300);

//   window.requestAnimationFrame(draw);
// }