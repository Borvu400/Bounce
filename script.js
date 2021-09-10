/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  

  // teken een cirkel
  fill(100, 255, 100);
  ellipse(50,50,80,80);

  fill(255, 100, 100);
  ellipse(250,50,80,80);

  fill(90, 60, 30);
  ellipse(450,50,80,80);

  fill(30, 60, 90);
  ellipse(650,50,80,80);

  fill(60, 90, 30);
  ellipse(850,50,80,80);

  // Bal 1
  if(x [0]>1230){
    SpeedX = SpeedX * -1
  }

  if(x [0]<0){
    SpeedX = SpeedX * -1
  }

  if(y[0]>670){
    SpeedY = SpeedY * -1
  }

  if(y [0]<0){
    SpeedY = SpeedY * -1
  }

  //bal 2
  if(x [1]>1230){
    SpeedX = SpeedX * -1
  }

  if(x [1]<0){
    SpeedX = SpeedX * -1
  }

  if(y[1]>670){
    SpeedY = SpeedY * -1
  }

  if(y [1]<0){
    SpeedY = SpeedY * -1
  }
}
