img = "";
status = "";
objects = "";

function preload() {
    function preload() {
        img = loadImage("https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fadolph-bed-with-side-storage%2Frevised%2Frevised%2Fhoney%2F1st-880x518.jpg?im-bypass=true");
    }
}
function setup() {
    Canvas = createCanvas(640, 420);
    Canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status2").innerHTML="Status :Detecting Object";
}



function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML="Status-Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}