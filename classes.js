class Screen {
    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.edge = {
            left: element.offsetLeft,
            top: element.offsetTop,
            right: element.offsetLeft + element.offsetWidth,
            bottom: element.offsetTop + element.offsetHeight
        }
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
    }
}

class Ball {
    constructor(element, radius, x, y, velX, velY) {
        this.element = element;
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;

        this.element.style.width = this.radius * 2 + 'px';
        this.element.style.height = this.radius * 2 + 'px';
    }

    setRadius(newRadius) {
        this.radius = newRadius;
        this.element.style.width = this.radius * 2 + 'px';
        this.element.style.height = this.radius * 2 + 'px';
    }

    update(container) {
        this.x += this.velX;
        this.y += this.velY;

        this.element.style.left = this.x + container.element.offsetLeft + 'px';
        this.element.style.top = this.y + container.element.offsetTop + 'px';
    }

    bounce(container) {
        // Bounce logic
        if (this.x + this.radius * 2 > container.width || this.x < 0) {
            this.velX *= -1;
        }

        if (this.y + this.radius * 2 > container.height || this.y < 0) {
            this.velY *= -1;
        }
    }

}

