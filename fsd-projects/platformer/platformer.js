$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

   // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(500, 0, 20, 200);
createPlatform(600, 650, 50, 50, "red");
createPlatform(800, 600, 50, 50, "red");
createPlatform(1150, 500, 50, 50, "red");
createPlatform(850, 500, 50, 50, "red");
createPlatform(600, 400, 50, 50, "red");
createPlatform(100, 400, 200, 20, "blue", 300, 500, 500)
createPlatform(300, 300, 50, 50, "red");
createPlatform(1350, 400, 50, 50, "red");
createPlatform(1150, 300, 50, 50, "red");
createPlatform(1350, 200, 50, 50, "red");
createPlatform(1000, 200, 50, 50, "red");
createPlatform(800, 150, 50, 50, "red");
createPlatform(200, 200, 50, 50, "red");

    // TODO 3 - Create Collectables
createCollectable("database", 1350, 50);
createCollectable("database", 700, 50);
createCollectable("database", 100, 100);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 750);
createCannon("right", 300, 900);
createCannon("top", 700, 900);
createCannon("right", 100, 950);
createCannon("top", 500, 900);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
