NoseX=0;
NoseY=0;
Difference=0;
RightWristX=0;
LeftWristX=0;
function setup(){
    canvas= createCanvas(550,550);
    canvas.position(560,150);
    y=createCapture(VIDEO);
    y.size(550,500);
    x=ml5.poseNet(y,ml5Loaded);
    x.on('pose',readPoses);
}
function ml5Loaded(){
    console.log("poseNet is loaded.");
}
function readPoses(z){
if(z.length>0){
console.log(z);
RightWristX=z[0].pose.rightWrist.x;
LeftWristX=z[0].pose.leftWrist.x;
NoseX=z[0].pose.nose.x;
NoseY=z[0].pose.nose.y;
console.log(RightWristX+"Right Wrist X");
console.log(LeftWristX+"Left Wrist X");
console.log(NoseX+"Nose X");
console.log(NoseY+"Nose Y");
Difference=floor(LeftWristX-RightWristX);
console.log(Difference+"Difference");
}
}
function draw(){
background("lightblue");
document.getElementById("abc").innerHTML="Font size of text will be"+Difference+"px";
textSize(Difference);
fill("blue");
stroke("white")
text('Daksh',50,400);
}