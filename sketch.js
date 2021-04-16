let cuadro1 = new Elemento(100,100,255,0,0);
let cuadro2 = new Elemento(200,100,255,255,0);
let cuadro3 = new Elemento(100,200,255,0,255);
let cuadro4 = new Elemento(200,200,0,255,255);

function setup() {
  createCanvas(400, 400);

  
}

function draw() {
  background(220);
  cuadro1.display();
  cuadro2.display();
  cuadro3.display();
  cuadro4.display();
}

function mousePressed() {
  if(cuadro1.validadateClick(mouseX, mouseY)){
    cuadro1.changeType();
  }
  if(cuadro2.validadateClick(mouseX, mouseY)){
    cuadro2.changeType();
  }
  if(cuadro3.validadateClick(mouseX, mouseY)){
    cuadro3.changeType();
  }
  if(cuadro4.validadateClick(mouseX, mouseY)){
    cuadro4.changeType();
  }
}
