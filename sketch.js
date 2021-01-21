var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var sceneNum = 0;
let timer = 22

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} //end of setup

function draw() {
  background(220);

  //drawing level number 1 I put the timer in each scene it needs to be. If the timer runs out it will go to the losing scene. If the user won the timer will stop.  
  if (sceneNum == 1) {
    levelOne();
    text(timer, 490, 20);

    if (frameCount % 60 == 0 && timer > 0) {
      timer--;

    } else if (timer == 0) {
      sceneNum = 6;
    } else if (sceneNum == 5)
      timer++;
  }
  //drawing level 2 with the same timer and rules-----------------------------------------
  if (sceneNum == 2) {
    levelTwo();
    text(timer, 490, 20);

    if (frameCount % 60 == 0 && timer > 0) {
      timer--;

    } else if (timer == 0) {
      sceneNum = 6;
    } else if (sceneNum == 5)
      timer++;
  }
  //drawing level 3 with the same timer and rules-----------------------------------------
  if (sceneNum == 3) {
    levelThree();
    text(timer, 490, 20);

    if (frameCount % 60 == 0 && timer > 0) {
      timer--;

    } else if (timer == 0) {
      sceneNum = 6;
    } else if (sceneNum == 5)
      timer++;
 //drawing level 4 with the same timer and rules------------------------------------------
  }
  if (sceneNum == 4) {
    levelFour();
    text(timer, 490, 20);

    if (frameCount % 60 == 0 && timer > 0) {
      timer--;

    } else if (timer == 0) {
      sceneNum = 6;
    } else if (sceneNum == 5)
      timer++;
  }
  //text("Press R to reset the ball",110,20);
  text(("score: " + score), width / 2, 40);


//begining stage--------------------------------------------------------------------------
  if (sceneNum == 0) {
    levelZero();
  }
//winning screen--------------------------------------------------------------------------
  if (sceneNum == 5) {
    levelFive();
  }
 //losing screen--------------------------------------------------------------------------
  if (sceneNum == 6) {
    levelSix();
  }
//if you press the P key you can play again
  if (key == 'p') {
    ballSize = 40
    sceneNum = 0;
    ellipse(mouseX, mouseY, ballSize, ballSize)
    ballx = random(width);
    bally = random(height);
    score = 0
    timer = 22
  }
  
  /*if (key == 'r') {
    ellipse(ballx,bally,ballSize,ballSize);
  }*/
  
  //ball animation
  ballx = ballx-0.6;
  bally = bally+0.7;
  

} //end of draw

//nothing special just text and a background.
function levelZero() {
  background(0, 0, 0);
  fill(255, 255, 0);
  textSize(50);
  text("Welcome To", 300, 50);
  textSize(70);
  text("Ball Chaser", 300, 150);
  textSize(50);
  text("Press the S key to start", 300, 250);
  textSize(40);
  text("Press P if you need to restart", 300, 550);
   //An ellipse that follows your cursor.
  ellipse(mouseX, mouseY, ballSize, ballSize)
//if you press the S key you will go to level 1
  if (key == 's') {
    sceneNum = 1;
  }
  
} //end of level 0    -------------------------------------------------
function levelOne() {
  background(166, 11, 11);
  textSize(20);
  //displaying the level number
  text("level 1", width / 2, height - 20);
  //measures how close your cursor is to the ellipse
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  //if the cursor touches the ball, move it and add a point to the score 
  if (disToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;

  }
//if you score 5 points go to the next level
  if (score > 4) {
    sceneNum = 2;
  }
  //draws the ball, stroke and line
  strokeWeight(4);
  stroke(51);
  fill(255, 255, 255);
  ellipse(ballx, bally, ballSize, ballSize)
  line(ballx, bally, mouseX, mouseY);
  noStroke();
} //end of level 1    -------------------------------------------------

function levelTwo() {
  background(200, 100, 0);
  //displaying the level number
  text("level 2", width / 2, height - 20);
  //measures how close your cursor is to the ellipse
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  //if the cursor touches the ball, move it and add a point to the score 
  if (disToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
//if you score 15 points go to the next level
  if (score > 14) {
    sceneNum = 3;
  }
  //draws the ball and stroke 
  strokeWeight(4);
  stroke(51);
  ellipse(ballx, bally, ballSize, ballSize)
  noStroke();

} //end of level 2    -------------------------------------------------

function levelThree() {
  background(193, 192, 11);
  //displaying the level number
  text("level 3", width / 2, height - 20);
   //measures how close your cursor is to the ellipse
  var disToBall = dist(ballx, bally, mouseX, mouseY);
   //if the cursor touches the ball, move it and add a point to the score 
  if (disToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
//if you score 20 points go to the next level
  if (score > 19) {
    sceneNum = 4;
  }

//draws the ball
  ellipse(ballx, bally, ballSize, ballSize)


} //end of level 3    -------------------------------------------------

function levelFour() {
  background(0, 100, 200);
  //displaying the level number
  text("level 4", width / 2, height - 20);
    //measures how close your cursor is to the ellipse
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  //if the cursor touches the ball, move it and add a point to the score
  if (disToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    //everytime the ball is touched get smaller
    ballSize = ballSize - 5;
  }
//if you score 28 points go to the winning screen
  if (score > 27) {
    sceneNum = 5;
  }

//draws the ball
  ellipse(ballx, bally, ballSize, ballSize)

} //end of level 4    -------------------------------------------------
function levelFive() {
  background(0, 0, 0);
  //just winning text
  fill(0, 255, 0);
  textSize(50);
  text("You finished the game", 300, 50);
  text("You scored all 28 points", 300, 150);
  text("In the given time!", 300, 250);
text("Press P to play again", 300, 550);


} //end of level 5    -------------------------------------------------
function levelSix() {
  background(0, 0, 0);
  //just losing text
  fill(255, 0, 0);
  textSize(50);
  text("You did not finish", 300, 80);
  text("The game fast enough", 300, 220);
  text("Press P to play again", 300, 550);
  
  //declaring the scene number 
  sceneNum = 6


} //end of level 6    -------------------------------------------------
