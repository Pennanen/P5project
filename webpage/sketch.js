let sLeft,sRight;
var mic;
function preload() {
	
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  cSlider = color(50,50,150);
  sLeft = new Slider(
				0,
				0,
				300,
				windowHeight,
				cSlider,
				0,
				-270);
				
  sRight = new Slider(
				windowWidth,
				0,
				-300,
				windowHeight,
				cSlider,
				windowWidth-10,
				windowWidth+260);
				
		mic = new p5.AudioIn()
		mic.start();
		
}

function draw() {
	
	background(10,10,10);
	sLeft.update();
	sRight.update();
	micLevel = mic.getLevel();
	
	ellipse(windowWidth/2,windowHeight/2,100+micLevel*1000,100+micLevel*1000);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}