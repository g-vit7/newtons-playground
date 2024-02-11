document.addEventListener("DOMContentLoaded", function () {
    const sandboxElement = document.getElementById("sandboxDiv");

    // This will be overwritten by the Object Array implemented in the future
    const photonElement = document.querySelector('.photon');

    const sandbox = new Screen(sandboxElement, 800, 600);
    sandbox.resize(800, 600)

    const photon = new Photon(photonElement, 0, 0, 0, 0, 10);

    function updateGame() {
        photon.update(sandbox);
        photon.bounce(sandbox);

        debug(photon, sandbox);
        requestAnimationFrame(updateGame);
    }

    updateGame();
});

// This is poorly coded but it is temporary.
function debug(object, container) {
    document.getElementById("dbPhotonX").innerText = object.x;
    document.getElementById("dbPhotonY").innerText = object.y;
    document.getElementById("dbPhotonVelX").innerText = object.velX;
    document.getElementById("dbPhotonVelY").innerText = object.velY;
    document.getElementById("dbScreenWidth").innerText = container.width;
    document.getElementById("dbScreenHeight").innerText = container.height;
    document.getElementById("dbScreenLeft").innerText = container.element.offsetLeft;
    document.getElementById("dbScreenTop").innerText = container.element.offsetTop;
    document.getElementById("dbScreenRight").innerText = container.element.offsetLeft + container.element.offsetWidth;
    document.getElementById("dbScreenBottom").innerText = container.element.offsetTop + container.element.offsetHeight;
}
/* WIP - this will replace the usage of querySelector and getElementByID.

 function create(className, htmlClass) {
    // Creating the object
    const object = new className();

    // Creating the DOM Element
    const element = document.createElement("div");
    element.classList.add(htmlClass);

    sandbox.element.appendChild(element);a
    }
*/