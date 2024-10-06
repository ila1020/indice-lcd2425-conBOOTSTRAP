//variabili globali, per tutto lo script
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
  circle(300,75,100);
  //prima della forma desiderata
  //cambiare fill e stroke
  fill('green');
  stroke('darkgreen');
  strokeWeight(5);
  rect (0, 200, 400, 200);

  stroke('yellow');
  strokeWeight(20);

  

  let xStars_prim=10;
  let yStars_prim=10;
  //stella che non dipende dal ciclo
  point(xStars_prim, yStars_prim);
  let passo=1;
  //for(init; test; update){corpo}
  for (let i=0; i<50; i=i+passo){
    strokeWeight(i*3)
    if(i%2==0){
stroke('yellow');
    }else{
      stroke('pink');
    }

    strokeWeight(i*3);
    point(xStars_prim*i, yStars_prim*i);
   
  }

  stroke('black');
  strokeWeight(0);
  text ("C'era una volta...",200,350);
  

}
