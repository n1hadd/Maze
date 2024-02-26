canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

window.onload = function () {
    const widthScaleFactor = 700 / 484;
    const heightScaleFactor = 700 / 484;

    var mazeImg = new Image();
    mazeImg.src = 'images/maze700x700.png';

    var charImg = new Image();
    charImg.src = 'images/cowboy.png';

    var posX = 225 * widthScaleFactor; // 0px -> 465px
    var posY = 2 * heightScaleFactor; // 0px -> 465px

    var charWidth = 20;
    var charHeight = 20;

    mazeImg.onload = function () {
        ctx.drawImage(mazeImg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(charImg, posX, posY, charWidth, charHeight);
    }

    document.addEventListener('keydown', function(e) {
        key = window.event ? e.keyCode : e.which;
        var nextX = posX;
        var nextY = posY;

        // Move character position based on arrow keys
        if (key == 37) { // left arrow
            nextX -= 5;
        } else if (key == 38) { // up arrow
            nextY -= 5;
        } else if (key == 39) { // right arrow
            nextX += 5;
        } else if (key == 40) { // down arrow
            nextY += 5;
        }

        // Check for collision with maze walls
        if (!isWallCollision(nextX, nextY, charWidth, charHeight)) {
            posX = nextX;
            posY = nextY;
            redrawMazeAndCharacter();
        }
    });

    // Function to redraw the maze and character
    function redrawMazeAndCharacter() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Redraw maze
        ctx.drawImage(mazeImg, 0, 0, canvas.width, canvas.height);
        // Redraw character
        ctx.drawImage(charImg, posX, posY, charWidth, charHeight);
    }

    // Function to check collision with maze walls
    function isWallCollision(x, y, width, height) {
        var imageData = ctx.getImageData(x, y, width, height);
        var pixels = imageData.data;

        // Check each pixel in the character's bounding box
        for (var i = 0; i < pixels.length; i += 4) {
            var red = pixels[i];
            var green = pixels[i + 1];
            var blue = pixels[i + 2];
            var alpha = pixels[i + 3];

            // Check if the pixel is not transparent (wall)
            if (red === 0 && green === 0 && blue === 0 && alpha === 255) {
                return true; // Collision detected
            }
        }
        return false; // No collision
    }
}
