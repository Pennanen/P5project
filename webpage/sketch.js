let sLeft,sRight;
var buttons = [];
var Planets = [];
var targetpos = 0;
var sunSize = 6000;
var Au = 3000;
function setup() 
{
	mainCanvas = createCanvas(windowWidth,windowHeight-100);
	cSlider = color(50,50,150);
	sLeft = new Slider(0,0,200,windowHeight,cSlider,0,-170);

	mainCanvas.position(0,100);
	h1 = createElement('h1','ASD');
	h1.position(windowWidth-100,10);
  //sRight = new Slider(windowWidth,0,-300,windowHeight,cSlider,windowWidth-10,windowWidth+260);
	buttons = createButtons(6);
	
	balls = createBalls(12);
	
	sun = new Ball(-2500,windowHeight/2,sunSize,color(255, 199, 0));
	
	mercury = new Ball(windowWidth/2+Au*0.39,windowHeight/2,sunSize/277,color(60,60,60),"Mercury");
	venus = new Ball(windowWidth/2+Au*0.72,windowHeight/2,sunSize/113,color(80,80,80),"Venus");
	earth = new Ball(windowWidth/2+Au*1.00,windowHeight/2,sunSize/108,color(0, 212, 255),"Earth");
	mars = new Ball(windowWidth/2+Au*1.52,windowHeight/2,sunSize/208,color(255, 99, 43),"Mars");
	jupiter = new Ball(windowWidth/2+Au*5.2,windowHeight/2,sunSize/9.7,color(252, 172, 98),"Jupiter");
	saturn = new Ball(windowWidth/2+Au*9.54,windowHeight/2,sunSize/11.4,color(252, 203, 97),"Saturn");
	uranus = new Ball(windowWidth/2+Au*19.2,windowHeight/2,sunSize/26.8,color(196, 255, 255),"Uranus");
	neptune = new Ball(windowWidth/2+Au*39.4,windowHeight/2,sunSize/27.7,color(32, 85, 247),"Neptune");
	
	Planets.push(sun);
	Planets.push(mercury);
	Planets.push(venus);
	Planets.push(earth);
	Planets.push(mars);
	Planets.push(jupiter);
	Planets.push(uranus);
	Planets.push(neptune);
	
	
}

function draw() {
	
	background(10,10,10);
	
	
	for(var i = 0; i<Planets.length;i++){
	Planets[i].update(targetpos);
	Planets[i].draw();
	}
	
	sLeft.update();
	//sRight.update();

	for(var i = 0; i<buttons.length;i++){
	buttons[i].update(sLeft.x+15);
	buttons[i].draw();
	}

	if (targetpos >= 2) {targetpos-=2}
	else if (targetpos <= -2) {targetpos+=2}
	else {targetpos = 0};
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  h1.position(windowWidth-100,10);
  mainCanvas.position(0,100);
}

function mouseWheel(event)
{
	targetpos=event.delta*0.5;
}