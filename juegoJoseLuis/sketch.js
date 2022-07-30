var aliensclaseelite,aliensdeexploracion,reyalien,reayaliendisparando,reyalientocino,rateros,guardiarobot,guardiarobotrip,aliensclaseelitecaminando;
var peppa;

function preload(){
  aliensclaseelite=loadImage("alien.02.gif");
  aliensdeexploracion=loadImage("alien.gif");
  reyalien=loadImage("rey alien passivo.gif");
  reayaliendisparando=loadImage("rey alien.gif");
  reyalientocino=loadImage("rey alien muerte.gif");
  rateros=loadImage("soldado aliado de los aliens.gif");
  guardiarobot=loadImage("guardia del alien.3.gif");
  guardiarobotrip=loadImage("guardia del alien.3.derrotado.webp");
  aliensclaseelitecaminando=loadImage("alien.02.caminando.gif");
  peppa=loadImage("soldado.gif");
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("purple");
  image(peppa,100,200,200,200)
 
}
