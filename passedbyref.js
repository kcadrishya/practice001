function modifyX(rectangle, weekDays){
    console.log("Before modifying: values "+rectangle.length+" Weekdays : "+weekDays);
    rectangle.length=rectangle.length*2;
    weekDays.push('Manic Days!!');
    console.log("After modifying: values : "+rectangle.length+" Weekdays : "+weekDays);
}

function reassignX(rectangle, weekDays){
    console.log("Before re-assigning: values "+rectangle.length+" Weekdays : "+weekDays);
    rectangle = new Rectangle(4,4);
    weekDays = ['Sat', 'Sun'];
    console.log("After re-assigning: values"+rectangle.length+" Weekdays : "+weekDays);
}
function Rectangle(length, breadth){
    this.length=length;
    this.breadth=breadth;
}