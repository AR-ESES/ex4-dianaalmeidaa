let espLarg = 10;
let espAltura = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(255);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg, j * height / espAltura)
      translate(-55,-45)
      scale(0.08);
      noStroke();
   
      
     
 

        noFill();
        stroke(50,255);
        circle(width /2, height /2, height / 4,);
        circle(width /2 - height /5/4, height /2 - height/18, height /12 );
        circle(width /2 + height /5/4, height /2 - height/18, height /12 );
        ellipse(645,475,280,242);
        ellipse(850,410,170,52);
        ellipse(441,410,170,52);
      pop();
    }
  }
}

