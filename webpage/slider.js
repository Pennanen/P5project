

class Slider{
	constructor(_x,_y,_w,_h,_c,_tV,_tH){
		this.w = _w;
		this.h = _h;
		this.c = _c;
		
		this.targetHidden = _tH;
		this.targetVisible = _tV;
		
		this.targetX = 0;
		this.x = _x;
		this.startX = _x;
		
		this.targetY = 0;
		this.y = _y;
		this.startY = _y;
	}
	
	update(){
		
	if (mouseX < this.startX+abs(this.w+10) & mouseX > this.startX-(abs(this.w-10)))
		{
		this.targetX = this.targetVisible;
		}
		else
		{
		this.targetX = this.targetHidden;
		}
		
		this.x += (this.targetX - this.x)*0.1;
		this.draw();
	}
	draw(){
		fill(this.c);
		noStroke();
		rect(this.x,this.y,this.w,this.h);
	}
}