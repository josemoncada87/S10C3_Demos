class Elemento{

  constructor(x,y,r,g,b){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.tam = 80;
    this.type = false;
  }

  display(){
    fill(this.r, this.g, this.b);
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

  changeType(){
    this.type = !this.type;
  }
}