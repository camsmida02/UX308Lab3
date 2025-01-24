/*/Write a program to calculate the volume of a cylinder. Start with a variable that contains the diameter of the end of the circle, and another variable that references the height in meters.

var diameter = 10;
var height = 20;


//V=πr2h

var volCylinder = (3.14) * ((diameter/2)**2) * height;

console.log("Volume is " +(volCylinder)+ " meters.");
/*/

function cubeVol(edge){
    let volCube = edge **3;
    return volCube;
}

console.log(cubeVol(10));
console.log(cubeVol(20));
console.log(cubeVol(30));