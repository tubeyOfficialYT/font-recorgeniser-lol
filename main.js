function setup(){
    video = creatCapture(VIDEO);
    video.size(550, 500);

    canvas =creatCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw()  {
    backgroung('#969A97')
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
    
}