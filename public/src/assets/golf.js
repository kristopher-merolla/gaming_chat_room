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
canvasWidth = 700,
canvasHeight = 600,
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
    inHole: false,
    strokes: 0,
    velocity: {x:0,y:0},
    radius: 3,
    speed: 10,
    theta: 0.785398, // roughly 45 degrees (in rad)
    // hit function to hit the ball
    hit: function() {
        if (golfBall.velocity.x <=0) {
            console.log("ball hit");
            this.velocity.x = this.speed*Math.cos(this.theta);
            this.velocity.y = this.speed*Math.sin(this.theta);
        }
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
            if (this.speed < 15) {
                this.speed += 0.1;
            }
            if (this.speed >=15) {
                this.speed = 15;
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
            this.x += this.velocity.x*(1/5);
            this.y -= this.velocity.y*(1/7);
            // boundry for y movement
            // console.log("velocity-y:",this.velocity.y);
            // console.log("position-y:",this.y);
            if ((this.y-this.velocity.y*(1/10)) >= canvasHeight-15-this.radius) { // ball hit/on ground
                this.velocity.y = -(this.velocity.y/2);
                this.velocity.x -= 0.06;
            }
            else { // ball is in the air
                this.velocity.y -= 0.1;
                this.velocity.x -= 0.01;
            }
            // boundry for x movement
            if (((this.x >= tee.x-1) && (this.x <= tee.x+1)) && ((this.y-this.velocity.y*(1/10)) >= canvasHeight-15-this.radius)) {
                // console.log("hit tee");
                this.inHole = true;
                tee.holeNumber ++;
                if (!tee.holeNumber || (tee.holeNumber==0)) { // for zeroth level
                    console.log("tee 0");
                    initGolf();
                }
                if (tee.holeNumber==1) {
                    initGolf1();
                }
                else {
                    tee.holeNumber = 0;
                    initGolf();
                }
            }
            if (this.x >= canvasWidth) {
                this.x = 0;
            }
            //
            this.draw();
        }
    },
    // draw function
    draw: function() {
        if (!this.inHole){ // if the ball is not in the hole...
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2*pi);
            ctx.stroke();
            ctx.fill();
            // console.log("golfBall Vel",golfBall.velocity.x)
        }
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
    holeNumber: null,
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
        if (keyState[Spacebar]) {
            golfBall.strokes ++;
        }
		delete keyState[evt.keyCode];
	});

    // initialize level and objects starting position
    // level selector (based on tee.holeNumber)
    if (!tee.holeNumber || (tee.holeNumber==0)) { // for zeroth level
        console.log("tee 0");
        initGolf();
    }
    if (tee.holeNumber==1) {
        console.log("tee 1");
        initGolf1();
    }

    // Game Loop
    var loop = function() {
		updateGolf();
        if (!tee.holeNumber || (tee.holeNumber==0)){
            drawGolf();
        }
        if (tee.holeNumber==1) {
            drawGolf1();
        }
		window.requestAnimationFrame(loop, canvas);
	};
	window.requestAnimationFrame(loop, canvas); // run game loop
}

function updateGolf() {
    // console.log("running update");
    golfBall.update();
}

// Levels

/////////////
// level 0 //
/////////////
function initGolf(){
    // tee
    tee.holeNumber = 0;
    tee.x = canvasWidth-25;
    tee.y = canvasHeight-55;
    tee.xflag = canvasWidth-25;
    tee.yflag = canvasHeight-55;
    // golf ball
    golfBall.x = 10;
    golfBall.y = canvasHeight-20;
    golfBall.inHole = false;
    golfBall.velocity.x = 0;
    golfBall.velocity.y = 0;
    golfBall.strokes = 0;
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
    // draw header
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    let header = "Hole " + tee.holeNumber + " - Strokes: " + golfBall.strokes;
    ctx.fillText(header,10,40);
    if (golfBall.velocity.x <=0) {
        // draw swing variables
        ctx.beginPath();
        ctx.arc(golfBall.x, golfBall.y, 40, 0, 1.5*pi+(0.5*pi-golfBall.theta), true);
        ctx.stroke();
        ctx.fillStyle = "black";
        //ctx.rotate(1.5*pi+(0.5*pi-golfBall.theta));
        ctx.fillRect(golfBall.x+golfBall.radius,golfBall.y,golfBall.speed*5,2);
    }
    
    ctx.restore();
}
/////////////
// level 1 //
/////////////
function initGolf1(){
    // tee
    tee.holeNumber = 1;
    tee.x = canvasWidth-25;
    tee.y = canvasHeight-55;
    tee.xflag = canvasWidth-25;
    tee.yflag = canvasHeight-55;
    // golf ball
    golfBall.x = 10;
    golfBall.y = canvasHeight-20;
    golfBall.inHole = false;
    golfBall.velocity.x = 0;
    golfBall.velocity.y = 0;
    golfBall.strokes = 0;
}
// Draw function (create elements and canvas for each step)
function drawGolf1() {
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "purple"; // sky color
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
    // draw header
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    let header = "Hole " + tee.holeNumber + " - Strokes: " + golfBall.strokes;
    ctx.fillText(header,10,40);
    if (golfBall.velocity.x <=0) {
        // draw swing variables
        ctx.beginPath();
        ctx.arc(golfBall.x, golfBall.y, 40, 0, 1.5*pi+(0.5*pi-golfBall.theta), true);
        ctx.stroke();
        ctx.fillStyle = "black";
        //ctx.rotate(1.5*pi+(0.5*pi-golfBall.theta));
        ctx.fillRect(golfBall.x+golfBall.radius,golfBall.y,golfBall.speed*5,2);
    }
    
    ctx.restore();
}