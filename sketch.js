var hr;
var mn;
var sc;
var scAngle;
function setup() {
  
angleMode(DEGREES);
createCanvas(800,400); 

}

function draw() {
  background(255,255,255);  

hr=hour();
mn= minute();
sc=second();

 scAngle=map(sc,0,60,0,360);
 mnAngle=map(mn,0,60,0,360);
 hrAngle=map(hr%12,0,12,0,360);

 translate(200,200);
 rotate(-90);
 
 push();
 rotate(scAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,100,0)
 pop();

 push();
 rotate(mnAngle);
 stroke(0,0,255);
 strokeWeight(7);
 line(0,0,75,0)
 pop();

 push();
 rotate(hrAngle);
 stroke(0,255,0);
 strokeWeight(7);
 line(0,0,60,0)
 pop();

 strokeWeight(7);
 noFill();
 stroke(255,0,0);
 arc(0,0,200,200,0,scAngle);
drawSprites();

strokeWeight(7);
 noFill();
 stroke(0,0,255);
 arc(0,0,150,150,0,mnAngle);

 strokeWeight(7);
 noFill();
 stroke(0,255,0);
 arc(0,0,150,150,0,hrAngle);
drawSprites();
}