class Screen {
    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
    }
}

class Matter {
    constructor(element, x, y, velX, velY) {
        this.element = element;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
    update(container) {
        this.x += this.velX;
        this.y += this.velY;

        this.element.style.left = this.x + container.element.offsetLeft + 'px';
        this.element.style.top = this.y + container.element.offsetTop + 'px';
    }

}

class Photon extends Matter {
    constructor(element, x, y, velX, velY, energy) {
        super(element, x, y, velX, velY)
        this.energy = energy;

        this.velX = 10;
        this.velY = 10;
    }

    bounce(container) {
        // Bounce logic
        if (this.x + this.velX > container.width || this.x < 2) {
            this.velX *= -1;
        }

        if (this.y + this.velY > container.height || this.y < 2) {
            this.velY *= -1;
        }
    }
}
class Ball extends Matter {
    constructor(element, x, y, velX, velY, radius) {
        super(element, x, y, velX, velY);
        this.radius = radius;

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
        if (this.x + this.radius * 2 > container.width || this.x < 2) {
            this.velX *= -1;
        }

        if (this.y + this.radius * 2 > container.height || this.y < 2) {
            this.velY *= -1;
        }
    }

}

