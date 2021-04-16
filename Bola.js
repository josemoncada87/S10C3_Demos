class Bola{
    constructor(x,y,r,g,b){
      this.x = x;
      this.y = y;
      this.r = r;
      this.g = g;
      this.b = b;
      this.tam = 30;
    }
  
    display(){
      noStroke();
      fill(this.r, this.g, this.b);
      ellipse(this.x, this.y, this.tam, this.tam);
    }
  
    move(x, y){
      this.x = x;
      this.y = y;
    }
  
    validadateClick(mx, my){
      if(dist(mx, my, this.x, this.y)<this.tam/2){
        return true;  
      }
      return false;
    }
  
    getR(){
      return this.r;
    }
  
    getG(){
      return this.g;
    }
  
    getB(){
      return this.b;
    }
  
    getX(){
      return this.x;
    }
  
    getY(){
      return this.y;
    }
  
  }