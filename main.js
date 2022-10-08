function setup(){
    canvas=createCanvas(800,400)
    video=createCapture(VIDEO)
    video.size(400,450)
    canvas.position(500,100)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
    }
    function modelLoaded(){
    console.log("Posenet is initialized")
    }

    var leftwrist=0
    var rightwrist=0
    var difference=0
    function gotPoses(result){
    if(result.length > 0){
    console.log(result)
   
    rightwrist=result[0].pose.rightWrist.x
    leftwrist=result[0].pose.leftWrist.x
    difference=floor(leftwrist - rightwrist)
    }}
    
    function draw(){
   background('#6C91C2')
   textsize(difference)
   fill('FFE787')
   text('peter',50,400)
    
    
    }
    