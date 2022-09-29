var paddle1
var paddle2
var ball
var edges
var gameState = "serve"
var compScore = 0
var playerScore = 0

function setup() {
  createCanvas(600, 600);

  paddle1 = createSprite(10, 300, 10, 60)
  paddle1.shapeColor = "purple"

  paddle2 = createSprite(590, 300, 10, 60)
  paddle2.shapeColor = "blue"

  ball = createSprite(300, 300, 20, 20)
  ball.shapeColor = "orange"

  edges = createEdgeSprites();

}

function draw() {
  background(51);
  if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play"
  }

  console.log(gameState)

  if (gameState === "serve") {
    text("Press Space to Serve", 235, 190)
  }

  if(ball.x > 600 || ball.x < 0){
   if(ball.x > 600){
    compScore = compScore + 1
   } 

   if(ball.x < 0){
    playerScore = playerScore + 1
   }
  
   reset();
   gameState = "serve"

  }

  if(compScore == 5 || playerScore == 5){
    gameState = "over"
    text("Game Over",200,200)
  }

  if(keyDown("r") && gameState === "over"){
    gameState = "serve"
    compScore = 0
    playerScore = 0
  }

  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])

  paddle1.y = mouseY
  paddle2.y = ball.y
 ball.bounceOff(paddle1)
  ball.bounceOff(paddle2)

  fill("white")
 text(playerScore,350,20)

 fill("white")
 text(compScore,260,20)

  drawSprites();
}

function serve() {
  ball.velocityX = 6
  ball.velocityY = 5
}

function reset(){
  ball.x = 300
  ball.y = 300
  ball.velocityX = 0
  ball.velocityY = 0
}