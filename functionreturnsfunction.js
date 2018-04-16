function getAreaFunction(shape){
    var circleAreaFunction = function(shape){
        return 3.14*shape.radius*shape.radius;
    }
    var rectangleAreaFunction = function(s){
        return shape.length*shape.breadth;
    }
    if (shape instanceof Rectangle){
        console.log("Rectangle was passed in.");
        return rectangleAreaFunction;
    }
    if (shape instanceof Circle){
        console.log("Circle was passed in. ");
        return circleAreaFunction;
    }
    return undefined;
}
function Rectangle(length, breadth){
    this.length=length;
    this.breadth=breadth;
}
function Circle(radius){
    this.radius=radius;
}