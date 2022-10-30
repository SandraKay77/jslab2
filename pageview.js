function View() {

    this.button = function(){
        canvas = document.getElementById("myCanvas");
        c = canvas.getContext("2d");
        // canvas.innerHTML = "<input type=\"button\" id=\"ClickMe\" value=\"Click me!\ label=\"Click Me!\">";

        var button = document.createElement("BUTTON")
        canvas.appendChild(button);

        button.setAttribute("id", "clickMe", "value", "Click Me!", "label", "Click Me!");
        button.onclick = console.log("hello!")
        button.style.cssText = `
        margin: auto;
        height: 100px;
        width: 100px;
        background-color: black;
        font-size: large;
        `
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

    }
}

