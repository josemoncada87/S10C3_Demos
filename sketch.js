let cuadros = [];

let bolitaA = new Bola(100, 300, 255, 0, 0);
let ref;

function setup() {
  createCanvas(400, 400);
  cuadros.push(new Elemento(100, 100, 255, 0, 0));
  cuadros.push(new Elemento(200, 100, 255, 255, 0));
  cuadros.push(new Elemento(100, 200, 255, 0, 255));
  cuadros.push(new Elemento(200, 200, 0, 255, 255));
  ref = undefined;
}

function draw() {
  background(220);
  for (let index = 0; index < cuadros.length; index++) {
    cuadros[index].display();
    if(cuadros[index].validadateEnterZone(bolitaA.getX(), bolitaA.getY())){
      cuadros[index].changeFillColor(bolitaA.getR(),bolitaA.getG(),bolitaA.getB());
    }else{
      cuadros[index].resetColor();
    }
  }
  bolitaA.display();
}

function mousePressed() {
  for (let index = 0; index < cuadros.length; index++) {
    if (cuadros[index].validadateClick(mouseX, mouseY)) {
      cuadros[index].changeType();
    }
  }

  if(bolitaA.validadateClick(mouseX, mouseY)){
    ref = bolitaA;
  }
}

function mouseDragged() {
  if(ref!==undefined){
    ref.move(mouseX, mouseY);
  }  
}

function mouseReleased(){
  ref = undefined;  
}