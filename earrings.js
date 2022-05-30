noseX = 0;
noseX2 = 0;
noseY = 0;
noseY2 = 0;

function preload() {
    earrings_filter = loadImage("earings-removebg-preview.png");
    earrings_filter2 = loadImage("earings-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 600);
    fill(255,0,0);
    stroke(255,0,0);
    image(earrings_filter, noseX, noseY, 120, 170);
    image(earrings_filter2, noseX2, noseY2, 120, 170);
}

function modelLoaded() {
   console.log("Posenet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
          console.log(results);
          noseX = results[0].pose.nose.x + 20;
          noseX2 = results[0].pose.nose.x - 130;
          noseY = results[0].pose.nose.y - 10;
          noseY2 = results[0].pose.nose.y - 10;
          console.log("nose x = " + noseX);
          console.log("nose y = " + noseY);
    }
}