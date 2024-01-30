var pointsArray = [
    [234, 2],
    [234, 10],
    [202, 10],
    [202, 42],
    [138, 42],
    [138, 154],
    [154, 154],
    [154, 138],
    [170, 138],
    [170, 122],
    [218, 122],
    [218, 138],
    [234, 138],
    [234, 58],
    [218, 58],
    [218, 42],
    [250, 42],
    [250, 90],
    [266, 90],
    [266, 122],
    [282, 122],
    [282, 170],
    [266, 170],
    [266, 218],
    [250, 218],
    [250, 170],
    [218, 170],
    [218, 154],
    [202, 154],
    [202, 186],
    [218, 186],
    [218, 202],
    [234, 202],
    [234, 234],
    [250, 234],
    [250, 266],
    [218, 266],
    [218, 282],
    [250, 282],
    [250, 298],
    [266, 298],
    [266, 266],
    [330, 266],
    [330, 282],
    [282, 282],
    [282, 330],
    [266, 330],
    [266, 314],
    [250, 314],
    [250, 330],
    [234, 330],
    [234, 362],
    [282, 362],
    [282, 346],
    [298, 346],
    [298, 330],
    [314, 330],
    [314, 346],
    [330, 346],
    [330, 410],
    [346, 410],
    [346, 394],
    [378, 394],
    [378, 378],
    [346, 378],
    [346, 346],
    [362, 346],
    [362, 330],
    [346, 330],
    [346, 314],
    [378, 314],
    [378, 330],
    [394, 330],
    [394, 298],
    [410, 298],
    [410, 378],
    [458, 378],
    [458, 394],
    [442, 394],
    [442, 442],
    [426, 442],
    [426, 458],
    [474, 458],
    [474, 474],
    [362, 474],
    [362, 458],
    [346, 458],
    [346, 474],
    [266, 474],
    [266, 442],
    [250, 442],
    [250, 378],
    [234, 378],
    [234, 410],
    [218, 410],
    [218, 394],
    [202, 394],
    [202, 410],
    [186, 410],
    [186, 426],
    [234, 426],
    [234, 442],
    [186, 442],
    [186, 458],
    [250, 458],
    [250, 482]
];
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawSolution() {
    const drawLinesWithDelay = (ctx, pointsArray, delay) => {
        ctx.beginPath();
        //ctx.strokeStyle = "blue";
        //ctx.lineWidth = 10;

        const drawLineSegment = (i) => {
            const point = pointsArray[i];
            const x = point[0];
            const y = point[1];
            const img = document.getElementById("gold1");

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                //ctx.lineTo(x, y);
                ctx.drawImage(img, x, y, 10, 10);
            }

            ctx.stroke();

            if (i < pointsArray.length - 1) {
                setTimeout(() => {
                    drawLineSegment(i + 1);
                }, delay);
            } else {
                ctx.closePath();
            }
        };

        drawLineSegment(0);

    };
    const delayBetweenLines = 500;
    drawLinesWithDelay(ctx, pointsArray, delayBetweenLines);
}
drawSolution();



document.addEventListener('DOMContentLoaded', drawCoins);

function drawCoins() {
    const coin = document.getElementById('gold1');
    const imagePaths = [
        'images/Gold_1.png',
        'images/Gold_2.png',
        'images/Gold_3.png',
        'images/Gold_4.png',
        'images/Gold_5.png',
        'images/Gold_6.png',
        'images/Gold_7.png',
        'images/Gold_8.png',
        'images/Gold_9.png',
        'images/Gold_10.png',
        'images/Gold_11.png',
        'images/Gold_12.png',
        'images/Gold_13.png',
        'images/Gold_14.png',
        'images/Gold_15.png',
        'images/Gold_16.png',
        'images/Gold_17.png',
        'images/Gold_18.png',
        'images/Gold_19.png',
        'images/Gold_20.png',
        'images/Gold_21.png',
        'images/Gold_22.png',
        'images/Gold_23.png',
        'images/Gold_24.png',
        'images/Gold_25.png',
        'images/Gold_26.png',
        'images/Gold_27.png',
        'images/Gold_28.png',
        'images/Gold_29.png',
        'images/Gold_30.png'

    ];
    const totalFrames = imagePaths.length;
    const animationSpeed = 100;

    let currentFrame = 0;

    function updateFrame() {
        coin.src = imagePaths[currentFrame];
        currentFrame = (currentFrame + 1) % totalFrames;
    }

    function startAnimation() {
        setInterval(updateFrame, animationSpeed);
    }

    startAnimation();
}