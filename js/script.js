
document.addEventListener('DOMContentLoaded', function () {
    const coin = document.getElementById('coin');
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
        // Add paths for the rest of your 30 images
    ];
    const totalFrames = imagePaths.length;
    const animationSpeed = 100; // Adjust the speed of the animation (milliseconds)

    let currentFrame = 0;

    function updateFrame() {
        coin.src = imagePaths[currentFrame];
        currentFrame = (currentFrame + 1) % totalFrames;
    }

    function startAnimation() {
        setInterval(updateFrame, animationSpeed);
    }

    startAnimation();
});
