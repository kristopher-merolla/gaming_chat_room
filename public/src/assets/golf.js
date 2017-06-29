// GOLF GAME
// 6/28/2017

// Variable Declarations
var
// Constant Variables
canvasWidth = 860,
canvasHeight = 460,
pi = Math.PI,
// User Inputs
ArrowUp = 38,
ArrowDown = 40,
ArrowLeft = 37,
ArrowRight = 39,
// Game Elements
canvas,
ctx,
keyState,
// Player (Golfer) Object
golfer = {
    x: null,
    y: null,
    width: 10,
    height: 25,
    // ball aim variables
    theta: 45, // likely need this in radians not degrees...
    vx0: 10
    // update function
    /* add function here */
    // draw function
    /* add function here */
},
// Golf ball Object
golfBall = {
    x: null,
    y: null,
    radius: 3,
    speed: 0
    // hit function to hit the ball
    /* add function here */
    // update function
    /* add function here */
    // draw function
    /* add function here */
},
// Tee object
tee = {
    x: null,
    y: null,
    width: 2,
    height: 10,
    // draw function
    /* add function here */
};



// Start game
function golf() {
    console.log("hello golf");

    // Set up canvas for the game
    canvas = document.createElement("canvas");
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	ctx = canvas.getContext("2d");
    document.getElementById("canvas").appendChild(canvas);
	keyState = {};
	// Track keyboard presses
	document.addEventListener("keydown", function(evt) {
		keyState[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keyState[evt.keyCode];
	});
	
    // Draw function (create elements and canvas for each step)
    function draw() {
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();
        ctx.fillStyle = "#6698FF"; // sky color
        // golfer.draw();
        // ball.draw();
        // tee.draw();
        // document.getElementById("canvas").style.background = '#6698FF';
        // Draw grass
        var w = 4;
        var x = (canvasWidth - w)*0.5;
        var y = 0;
        var step = canvasHeight/20; // how many net segments
        while (y < canvasHeight) {
            ctx.fillRect(x, y+step*0.25, w, step*0.5);
            y += step;
        }
        ctx.restore();
    }
	

    // Game Loop
    var loop = function() {
		// update();
		draw();
		window.requestAnimationFrame(loop, canvas);
	};
	window.requestAnimationFrame(loop, canvas);
}