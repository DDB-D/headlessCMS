// get target div
var containerNode = document.getElementById("content_stage_bg-img");
// get width and height of target div
var containerWidth = containerNode.offsetWidth;
var containerHeight = containerNode.offsetHeight;
// load toxilib components
var VerletPhysics2D = toxi.physics2d.VerletPhysics2D,
    VerletParticle2D = toxi.physics2d.VerletParticle2D,
    VerletSpring2D = toxi.physics2d.VerletSpring2D,
    VerletMinDistanceSpring2D = toxi.physics2d.VerletMinDistanceSpring2D,
    Vec2D = toxi.geom.Vec2D,
    Rect = toxi.geom.Rect,
    AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior,
    GravityBehavior = toxi.physics2d.behaviors.GravityBehavior;

// start: p5 sketch
var sketch = function( p ) {

  var options = {
    numClusters: 50,
    particleRadius: 10,
    showPhysics: true,
    showParticles: true,
    springStrength: 0.01,
    minDistanceSpringStrength: 0.05
  };

/*
  var gui = new dat.gui.GUI();
  gui.add(options, 'numClusters', 5, 16).step(1);
  gui.add(options, 'showPhysics');
  gui.add(options, 'showParticles');
  gui.add(options, 'springStrength', 0, 0.1).step(0.001);
  gui.add(options, 'minDistanceSpringStrength', 0, 0.1).step(0.001);
  gui.add({ makeGraph: p.makeGraph }, 'p.makeGraph').name('New Graph');
*/

  var clusters,
      physics,
      mouseAttractor
      selected;

  //make particles draggable
  //var dragging = false; // Is the object being dragged?
  //var rollover = false; // Is the mouse over the ellipse?

  var snapDist=10*10;
  var selected = new VerletParticle2D(null);
  var mousePos;

  p.setup = function() {

    myp5GlobalSketchVar = p.createCanvas(containerWidth, containerHeight);

    physics = new VerletPhysics2D();
    physics.setWorldBounds(new Rect(10, 10, p.width-20, p.height-20));

    //mouseAttractor = new AttractionBehavior();

    p.makeGraph();
  }

  p.draw = function(){
    physics.update();
    p.background(255);
    if(options.showParticles){
        clusters.forEach(function(c){
            c.display();
        });
    }
    if(options.showPhysics){
        p.forEachNested(clusters, function(ci, cj){
                      ci.showConnections();
                      ci.showConnections(cj);
        });
    }


  }

  p.times = function(n, fn){
      var arr = [];
      for(var i=0; i<n; i++){
          arr.push(fn(i,n));
      }
      return arr;
  };

  p.forEachNested = function(arr, fn){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            var result = fn(arr[i], arr[j], i, j, arr);
            if(result === false){
                return;
            }
        }
    }
  }

  p.makeGraph = function(){

    physics.clear();

    clusters = p.times(options.numClusters, function(){
        return new p.Cluster(
            1,
            Math.floor(p.random(15, 45)),
            new Vec2D((p.width/4)*3, p.height/2)
        );
    });

    p.forEachNested(clusters, function(ci, cj){
        ci.connect(cj);
    })
  }



  p.Cluster = function(n, d, center){
    this.diameter = d;
    this.nodes = p.times(n, function(){
        return new p.Node(center.add(Vec2D.randomVector()));
    });

    for(var i=1; i<this.nodes.length; i++){
        var pi = this.nodes[i];
        for(var j=0; j<i; j++){
            var pj = this.nodes[j];
            physics.addSpring(new VerletSpring2D(pi, pj, d, options.springStrength));
        }
    }
  }

  p.Cluster.prototype.display = function(){
    this.nodes.forEach(function(n){
        n.display();
    });
  };

  p.Cluster.prototype.connect = function(other){
    var selfDiam = this.diameter;
    this.nodes.forEach(function(pi){
        other.nodes.forEach(function(pj){
            physics.addSpring(
                new VerletSpring2D(
                    pi,
                    pj,
                    (selfDiam + other.diameter)*5.5,
                    0.0001
                )

            );
            physics.addSpring(
                new VerletMinDistanceSpring2D(
                    pi,
                    pj,
                    (selfDiam + other.diameter)*5,
                    0.9
                )

            );
        })
    });
  };

  p.Cluster.prototype.showConnections = function(other){
    if(!other){
      p.stroke(128);
        p.forEachNested(this.nodes, function(pi, pj){
            p.line(pi.x, pi.y, pj.x, pj.y);
        });
    } else {
        p.stroke(0, 15);
        this.nodes.forEach(function(pi){
            other.nodes.forEach(function(pj){
                p.line(pi.x, pi.y, pj.x, pj.y);
            });
        });
    }
  };

  p.Node = function(pos){
    VerletParticle2D.call(this, pos);
  }

  p.Node.prototype = Object.create(VerletParticle2D.prototype);

  p.Node.prototype.display = function(){
    p.fill(0);
    p.ellipse(this.x, this.y, options.particleRadius, options.particleRadius);
  };

  p.mousePressed = function(){

    mousePos = new Vec2D(p.mouseX, p.mouseY);

    clusters.forEach(function(c){
      c.nodes.forEach(function(n){
        if (n.distanceToSquared(mousePos)<snapDist) {
          selected=n;
          selected.lock();
          //p.break;
          return false;
        }
      });
    });

    mouseAttractor = new AttractionBehavior(mousePos, 250, 0.9);
    physics.addBehavior(mouseAttractor);
  }

  p.mouseDragged = function(){
    if (selected!=null) {
      selected.set(p.mouseX, p.mouseY);
    }
    mousePos.set(p.mouseX, p.mouseY);
  }

  p.mouseReleased = function() {
    if (selected!=null) {
      selected.unlock();
      selected=null;
    }
    physics.removeBehavior(mouseAttractor);
  }
}

myp5 = new p5(sketch, containerNode);
