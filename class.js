class Vector {
    constructor(data = {}) {
        this.x = data.x || 0;
        this.y = data.y || 0;
    }
    add(vector = {}) {
        this.x += vector.x || 0;
        this.y += vector.y || 0;
    }
    set(vector = {}) {
        this.x = vector.x || this.x;
        this.y = vector.y || this.y;
    }
    multiple(vector = {}) {
        this.x *= vector.x || 1;
        this.y *= vector.y || 1;
    }
}