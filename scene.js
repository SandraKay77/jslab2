function Scene() {
    var Bubbles = [];
    


    

    this.add = function () {
          x = 10 + (30 * Math.random()),
          y = 10 * (30 * Math.random()),
          r = 10 * Math.random(),
          myBubble = new Bubble(x, y, r),
          Bubbles.push(myBubble)
      };
    

    this.draw = function(context, width, height){
        
        for(var i = 0; i < mShapes.length; i++) {
            Bubbles[i].show(context, width, height);
        }

    }

        

    }
    
