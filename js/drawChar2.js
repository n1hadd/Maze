var canvas1 = document.getElementById('myCanvas1');
var ctx1 = canvas1.getContext('2d');

function exec() {

    var scale = 1.4463;
    function drawMaze() {
        ctx1.lineWidth = 2;
        ctx1.strokeStyle = "#898989";

        canvas1.width = 484 * scale;
        canvas1.height = 484 * scale;
        ctx1.scale(scale, scale);
        ctx1.beginPath();
        for (var i = 0; i < lines.length; i++) {
            ctx1.moveTo(lines[i].x1, lines[i].y1);
            ctx1.lineTo(lines[i].x2, lines[i].y2);
        }
        ctx1.stroke();
        ctx1.closePath();
    }


    var char2 = new Image();
    char2.src = 'images/char2.png';
    var ch2W = 12;
    var ch2H = 15;
    var currentIndex2 = 0;
        if (currentIndex2 < pointsArray.length) {
            var point = pointsArray[currentIndex2];
            var curX = point[0] - ch2W + 7;
            var curY = point[1] - ch2H + 7;
            var prevPoint = currentIndex2 > 0 ? pointsArray[currentIndex2 - 1] : point;
            var prevX1 = prevPoint[0] - ch2W + 7;
            var prevY1 = prevPoint[1] - ch2H + 7;

            if (currentIndex2 == 0) {
                ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
                drawMaze();
                ctx1.drawImage(char2, 0, 64, 24, 32, 228, 2, ch2W, ch2H);
            }
            else if (curX < prevX1) {
                //left
                ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
                drawMaze();
                ctx1.drawImage(char2, 0, 96, 24, 32, curX, curY, ch2W, ch2H);
            }
            else if (curX > prevX1) {
                //right
                ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
                drawMaze();
                ctx1.drawImage(char2, 0, 32, 24, 32, curX, curY, ch2W, ch2H);
            }
            else if (curY > prevY1) {
                //down
                ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
                drawMaze();
                ctx1.drawImage(char2, 0, 64, 24, 32, curX, curY, ch2W, ch2H);
            }
            else if (curY < prevY1) {
                //up
                ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
                drawMaze();
                ctx1.drawImage(char2, 0, 0, 24, 32, curX, curY, ch2W, ch2H);
            }

            currentIndex2++;

            // Request the next frame
            setTimeout(drawChar2, 60);
        }
    drawChar2();
}
