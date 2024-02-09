document.addEventListener("DOMContentLoaded", function () {
    const sandboxElement = document.getElementById("sandboxDiv");
    const ballElement = document.querySelector('.ball');

    const sandbox = new Screen(sandboxElement, 800, 600);
    sandbox.resize(800, 600)

    const ball = new Ball(ballElement, 60, 20, 50, 5, 5);
    ball.setRadius(20);

    function updateGame() {
        ball.update(sandbox);
        ball.bounce(sandbox);

        document.getElementById("dbBallX").innerText = ball.x;
        document.getElementById("dbBallY").innerText = ball.y;
        document.getElementById("dbBallVelX").innerText = ball.velX;
        document.getElementById("dbBallVelY").innerText = ball.velY;
        document.getElementById("dbBallRadius").innerText = ball.radius;
        document.getElementById("dbScreenWidth").innerText = sandbox.width;
        document.getElementById("dbScreenHeight").innerText = sandbox.height;
        document.getElementById("dbScreenLeft").innerText = sandbox.element.offsetLeft;
        document.getElementById("dbScreenTop").innerText = sandbox.element.offsetTop;
        document.getElementById("dbScreenRight").innerText = sandbox.element.offsetLeft + sandbox.element.offsetWidth;
        document.getElementById("dbScreenBottom").innerText = sandbox.element.offsetTop + sandbox.element.offsetHeight;
        requestAnimationFrame(updateGame);
    }

    updateGame();
});