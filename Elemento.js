class Elemento{

  constructor(x,y,r,g,b){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;

    this.rFill = 255;
    this.gFill = 255;
    this.bFill = 255;

    this.tam = 80;
    this.type = false;
  }

  display(){
    stroke(this.r, this.g, this.b);  
    fill(this.rFill, this.gFill, this.bFill);
    if(this.type){
      ellipse(this.x, this.y,this.tam, this.tam);
    }else{
      rectMode(CENTER);
      rect(this.x, this.y,this.tam, this.tam);
      rectMode(CORNER);
    }
  }

  validadateClick(mx, my){
    if(dist(mx, my, this.x, this.y)<this.tam/2){
      return true;  
    }
    return false;
  }

  validadateEnterZone(mx, my){
    if(dist(mx, my, this.x, this.y)<this.tam/2){
      return true;  
    }
    return false;
  }

  changeType(){
    this.type = !this.type;
  }

  resetColor(){
    this.rFill = 255;
    this.gFill = 255;
    this.bFill = 255;
  }

  changeFillColor(r,g,b){
    this.rFill = r;
    this.gFill = g;
    this.bFill = b;
  }
}