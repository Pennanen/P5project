var click = 0;
var buttonList = [];
var ballList = [];

function createButtons(maxButtons)
{
	for(var i = 1; i<=maxButtons;i++)
	{
	buttonI = new Button(40,38*i,170,32,'Nappi '+i);
	buttonList.push(buttonI);
	}
	return buttonList;
}
function createBalls(maxBalls)
{
	var _c = color(255,255,255);
	for(var i = 1; i<=maxBalls;i++)
	{
	ballI = new Ball(windowWidth/2-100+100*i,windowHeight/2,60,_c);
	ballList.push(ballI);
	}
	return ballList;
}

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

class Ball{
	constructor(_x,_y,_r,_c,_label)
	{
	this.x = _x;
	this.y = _y;
	this.r = _r;
	this.originalR = _r;
	this.c = _c;
	this.label = _label;
	}
	
	update(_pos,_scale)
	{
	if (!keyIsDown(CONTROL))this.x+=_pos;
	}
	
	draw()
	{
		if (this.x < windowWidth+this.r+200 && this.x > -this.r-200)
		{
		fill(this.c);
		ellipse(this.x,this.y,this.r,this.r,this.label);
		fill(color(255,255,255));
		textAlign(LEFT);
		textSize(26+windowWidth/50);
		text(this.label, this.x+this.r/2+100, this.y);
		}
	}
}

class Button
{
	constructor(_x,_y,_w,_h,_label){
		this.x1 = _x;
		this.y1 = _y;
		this.label = _label;
		this.w = _w;
		this.h = _h;
		this.active = 1;
		this.x2 = this.x1+this.w;
		this.y2 = this.y1+this.h;
		this.cBase = color(130,130,180);
		this.cSelect = color(165,140,255);
		this.c = this.cBase;
		this.clicked = false;
	}
	
	update(_targetX)
	{
	this.x1 = _targetX;
	
	if (click == 1)
		{
		if (mouseX > this.x1 && mouseX < this.x2 && mouseY > this.y1 && mouseY < this.y2 && !this.clicked)
			{
				buttonList.active = -1;
				this.active *= -1;
				this.clicked = true;
			}
			if (this.active == -1) {this.c = this.cSelect;}
			else {this.c = this.cBase;};
		}
		else
		{
			this.clicked = false;
			//this.active = 1; //disable other buttons? Works almost
		}
		
		
	}
	
	draw(){
		fill(this.c);
		noStroke();
		rect(this.x1,this.y1,this.w,this.h);
		textSize(26);
		fill(color(255,255,255));
		textAlign(CENTER,CENTER);
		text(this.label, this.x1+this.w/2, this.y1+this.h/2);
	}
}

function mousePressed() {
	buttons.active = -1;
if (click==0)click = 1;
}
function mouseReleased() {
click = 0;
}