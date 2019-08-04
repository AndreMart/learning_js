var points = [{
        x: 0,
        y: 0
    },
    {
        x: 1,
        y: 1
    }
];

points.dist = function () {
    var p1 = this[0]; // assignment { x: 0, y: 0 }
    var p2 = this[1]; // assignment {x:1 , y:1 }
    var a = p2.x - p1.x; //assignment 1
    var b = p2.y - p1.y; //assignment 1
    return Math.sqrt(a * a + b * b); // returns the square root of a number
};

console.log(points.dist())