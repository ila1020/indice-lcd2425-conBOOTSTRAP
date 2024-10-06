let xsize = 400;
let ysize = 400;



function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  //fare cielo scuro
  background('darkblue');
  //disegnare la luna
  fill('yellow');
  stroke('white');
  strokeWeight('10');
  circle(340,50,80);
  //prima della forma desiderata
  //cambiare fill e stroke
  fill('green');
  stroke('darkgreen');
  strokeWeight(5);
  rect (0, 250, 400, 400);

  strokeWeight(0);
  fill('white');
  square(30, 177, 70);
  
  fill('red');
  triangle(30, 177, 64, 110, 100, 177);
 
  

}
