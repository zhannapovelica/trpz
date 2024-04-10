function perimeter(side, count) {
    if (count < 3) {
        console.log("A regular polygon has more than three sides!!!!");
        return;
    }
    const perimeter = side * count;
    console.log("Perimeter of a regular polygon with " + count + " sides lengthwise " + side + " with perimeter " + perimeter);
}
const sideLength = 5;
const sidesCount = 6; 
perimeter(sideLength, sidesCount);