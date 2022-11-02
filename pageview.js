function View() {

    
    

    this.button = function () {
        canvas = document.getElementById("myCanvas");
        c = canvas.getContext("2d");
        var button = document.createElement("BUTTON")

        document.body.insertBefore(button, canvas);
        button.innerHTML = "Click Me!";
        button.setAttribute("id", "clickMe", "value", "Click Me!", "label", "Click Me!");
        button.onclick = this.clicky
        button.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%
        
        text-align: center
        background-color: violet;
        font-size: large;
        `
    }

    this.clicky = function () {
        
        mBox.draw();



        

    }

    this.redraw = function () {
        canvas = document.getElementById("myCanvas");
        context = canvas.getContext("2d");
        context.fillStyle = "aqua";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.strokeRect(0, 0, canvas.width, canvas.height);


        // mScene.draw(canvas, canvas.width, canvas.height);
    }

    this.resize = function () {
        canvas = document.getElementById("myCanvas");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.redraw();
        this.button();
        mBox = new Box();



    }
}

function Box() {
    var Boxes = [];
    canvas = document.getElementById("myCanvas");
    c = canvas.getContext("2d");
  
    this.newBox = function () {
    this.x = Math.round((10 * (150 * Math.random())));
    this.y = Math.round(10 * (90 * Math.random()));
    this.w = Math.round(2 * ((Math.random() * (50 - 10) + 10)));
    this.h = Math.round(2 * ((Math.random() * (10) + 10)));
    return [this.x, this.y, this.w, this.h];
    }
  
   
  
    this.draw = function () {
        for (var i = 0; i < Boxes.length; i++) {
            Boxes[i].draw();
            


        }
      let rect = this.newBox();
      c.fillStyle = "red";
      c.fillRect(rect[0], rect[1], rect[2], rect[3]);
      
      c.stroke();
      
      // c.fill
    }
  
    
  }