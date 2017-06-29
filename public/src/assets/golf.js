// GOLF GAME
// 6/28/2017

function startGolf(game_profile) {
	if(game_profile != "golf"){
		playGolf = false;
	}
	if(game_profile == "golf"){
		playGolf = true;
		console.log("playing golf!", playGolf);
		golf();
	}
}

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
Spacebar = 32,
// Game Elements
canvas,
ctx,
keyState,
// Golf ball Object
golfBall = {
    x: null,
    y: null,
    velocity: {x:0,y:0},
    radius: 3,
    speed: 20,
    theta: 0.785398, // roughly 45 degrees (in rad)
    // hit function to hit the ball
    hit: function() {
        console.log("ball hit");
        this.velocity.x = this.speed*Math.cos(this.theta);
        this.velocity.y = this.speed*Math.sin(this.theta);
    },
    // update function
    update: function() {
        if (keyState[ArrowUp]) {
            if (this.theta < 1.57) { // max up angle (roughly 90 deg)
                this.theta += 0.005;
            }
            if (this.theta >= 1.57) {
                this.theta = 1.57;
            }
            console.log("theta:",this.theta);
        }
        if (keyState[ArrowDown]) {
            if (this.theta > 0) { // min down angle
                this.theta -= 0.005;
            }
            if (this.theta <= 0) {
                this.theta = 0;
            }
            console.log("theta:",this.theta);
        }
        if (keyState[ArrowLeft]) {
            if (this.speed <= 0.1) {
                this.speed = 0.1;
            }
            if (this.speed > 0) {
                this.speed -= 0.1;
            }
            console.log("speed:",this.speed);
        }
        if (keyState[ArrowRight]) {
            if (this.speed < 30) {
                this.speed += 0.1;
            }
            if (this.speed >=30) {
                this.speed = 30;
            }
            console.log("speed:",this.speed);
        }
        if (keyState[Spacebar]) {
            this.hit();
        }
        // action to take (ball should move if velocity not zero)
        if (this.velocity.x !== 0) {
            if (this.velocity.x < 0) {
                this.velocity.x = 0;
            }
            this.x += this.velocity.x*(1/20);
            this.y -= this.velocity.y*(1/20);
            this.velocity.x -= 0.01;
            // boundry for y movement
            console.log(this.velocity.y);
            if (this.y >= canvasHeight-15-this.radius) {
                this.velocity.y = -(this.velocity.y/2);
            }
            else {
                this.velocity.y -= 0.1;
            }

            this.draw();
        }
    },
    // draw function
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*pi);
        ctx.stroke();
        ctx.fill();
    }
},
// Tee object
tee = {
    x: null,
    y: null,
    xflag: null,
    yflag: null,
    width: 2,
    height: 40,
    // draw function
    draw: function() {
        // draw pole
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,2,this.height);
        ctx.stroke();
        ctx.fill();
        // draw flag
        ctx.beginPath(); // note: w/o this, color does not work as expected 
        ctx.fillStyle = "red";
        ctx.moveTo(this.xflag, this.yflag);
        ctx.lineTo(this.xflag, this.yflag+8);
        ctx.lineTo(this.xflag-10, this.yflag+6);
        ctx.fill();
    }
};


// Start game
function golf() {
    console.log("hello golf");

    // Set up canvas for the game
    canvas = document.createElement("canvas");
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	ctx = canvas.getContext("2d");
    document.getElementById("canvasGolf").appendChild(canvas);
	keyState = {};
	// Track keyboard presses
	document.addEventListener("keydown", function(evt) {
		keyState[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keyState[evt.keyCode];
	});

    // initialize objects (starting positions)
    initGolf();

    // Game Loop
    var loop = function() {
		updateGolf();
		drawGolf();
		window.requestAnimationFrame(loop, canvas);
	};
	window.requestAnimationFrame(loop, canvas); // run game loop
}

function initGolf(){
    // tee
    tee.x = canvasWidth-25;
    tee.y = canvasHeight-55;
    tee.xflag = canvasWidth-25;
    tee.yflag = canvasHeight-55;
    // golf ball
    golfBall.x = 10;
    golfBall.y = canvasHeight-20;
}

function updateGolf() {
    // console.log("running update");
    golfBall.update();
}

// Draw function (create elements and canvas for each step)
function drawGolf() {
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#6698FF"; // sky color
    ctx.save();
    // Draw grass
    ctx.fillStyle = "#1B5E20"; // grass color
    ctx.fillRect(0,canvasHeight-15,canvasWidth,15);
    // draw ball
    ctx.fillStyle = "white"; // grass color
    golfBall.draw();
    // draw tee
    ctx.fillStyle = "black"; // tee color
    tee.draw();
    
    ctx.restore();
}