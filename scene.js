function Scene() {
    var mShapes = [];
    
    this.draw = function(context, width, height){
        for(var i = 0; i < mShapes.length; i++) {
            mScene[i].redraw(context, width, height);
        }

    }

    this.add = function() {

        for (let i = 0; i < 10; i++){
            x = Math.random() * window.width;
            y = Math.random() * window.height;
            r = Math.floor(Math.random() * 10);
            myBubble = new Bubble(x, y, r);
            mShapes.push(myBubble);

        }
        

    }
    
}