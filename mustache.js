noseX = 0;
noseY = 0;

function preload() {
    mustache_filter = loadImage("mustache-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 600);
    fill(255,0,0);
    stroke(255,0,0);
    image(mustache_filter, noseX, noseY, 120, 60);
}

function modelLoaded() {
   console.log("Posenet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
          console.log(results);
          noseX = results[0].pose.nose.x + 110;
          noseY = results[0].pose.nose.y + 140;
          console.log("nose x = " + noseX);
          console.log("nose y = " + noseY);
    }
}