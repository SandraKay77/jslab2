bubbles = [];

function sketch(){
    
for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let nB = new Bubble(x, y, r);
    bubbles.push(nB);

  }
}

function redraw(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.fillStyle = "Aqua";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < bubbles.length; i++) {

        bubbles[i].move();
        bubbles[i].show();
}

function resize() {
    var canvas = document.getElementById("myCanvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redraw();

}
}
