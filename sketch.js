// var canvas;
// var hcanvas, position, database;
var drawing = [];
var database;
var currentPath = [];
var isDrawing = false;

function setup() {
  //   //   database = firebase.database();
    
    canvas = createCanvas(500, 500);
    canvas.mousePressed(startPath);
    canvas.parent('canvascontainer')
    canvas.mouseReleased(endPath);

    var clearButton = select('#clearButton');
    clearButton.mousePressed(clearDrawing);

  var firebaseConfig = {
    apiKey: "AIzaSyCoKmD2XeAeCDg7r0XJUEnYppc__R4cAEs",
    authDomain: "painting-canvas-116e9.firebaseapp.com",
    databaseURL: "https://painting-canvas-116e9.firebaseio.com",
    projectId: "painting-canvas-116e9",
    storageBucket: "painting-canvas-116e9.appspot.com",
    messagingSenderId: "1016343829422",
    appId: "1:1016343829422:web:9bb843893656c18cacc63f",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();

  // var ref = database.ref('drawings');
  // ref.on('value', gotData, errData)

}
function startPath(){
  isDrawing =true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath() {
 isDrawing = false;
}
function draw() {
    background(0);
    if(isDrawing) {
      var point = {
        x:mouseX,
        y: mouseY
      }
   
currentPath.push(point);
    }
    stroke(255);
    strokeWeight(4);
    noFill();

    for(var i = 0; i < drawing.length; i++) {
      var path = drawing[i];
      beginShape();

    for(var j = 0; j < path.length; j++) {
      vertex(path[j].x, path[j].y);
    }
    endShape();
  }
  
}

// function gotData(data) {
// var keys = Object.keys(drawings);
// for(var i = 0; i < keys.length; i++){
//   var key = keys[i];
//   // console.log(key);  
// }
// }

function clearDrawing(){
  drawing = [];
}

// function errData(err){
//   console.log(err);
// }

