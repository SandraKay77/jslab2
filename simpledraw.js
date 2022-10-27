function View() {
    var mScene = new Scene();

    mScene.add(new Bubble({
        x: 100,
        y: 750,
        d: 45
    }));

    // mScene.add(new Shape({
    //     color: "Blue",
    //     x:
    //     y:
    //     w:
    //     h:
    // }));

    this.redraw = function () {
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        context.fillStyle = "Aqua";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.strokeRect(0, 0, canvas.width, canvas.height);
        
        mScene.draw(canvas, canvas.width, canvas.height);
    }

    this.resize = function () {
        var canvas = document.getElementById("myCanvas");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.redraw();
    }
}

    
