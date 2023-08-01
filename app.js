console.log("Hello World!\n==========\n");

// Exercise 1 Section
 function printOdds(count){
     for(let i = 1; i <= count; i++){
         if(i % 2 != 0){
             console.log(i)
         }
    }
 }

 printOdds(100);
 


// // Exercise 2 Section
// // console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let OldEnough = `congrats ${userName}, You can drive!`;
    let tooYoung = `sorry ${userName}, but you need to wait until your 16.`;

    if(age < 16){
        console.log(tooYoung);
    }else{
        console.log(OldEnough);
    }
}
checkAge("jessy", 15);
checkAge("Alex", 19);
checkAge("Janny", 30)


//Exercise  3

function whichQuadrant(x, y){
    if(x > 0 && y > 0){
        console.log(`${x}, ${y} is on Quandrant 1`);
    }else if (x < 0 && y < 0){
        console.log(`${x}, ${y} is on Quandrant 3`);
    }else if(x < 0 && y > 0){
        console.log(`${x}, ${y} is on Quadrant 2`);
    }else if(x > 0 && y < 0){
        console.log(`${x}, ${y} is on Qudrant 4`);
    }else if(x != 0 && y == 0){
        console.log(`${x}, ${y} is on the x axis`);
    }else if(x == 0 && y != 0){
        console.log(`${x}, ${y} is on y axis`);
    }else {
        console.log(`${x}, ${y} is on the origin`);
    }
}
    whichQuadrant(1, 2);
    whichQuadrant(0, 2);
    whichQuadrant(-6, 18);
    whichQuadrant(0, 0);
    whichQuadrant(-6, -6);
    whichQuadrant(4, -5);
    whichQuadrant(7, 0);


    //Exercise4
    function checkTriangle(side1, side2, side3){
        let isValid = false;
        if(side1 + side2 > side3 && side2 + side3 > side1 && 
            side1 + side3 > side2){
                isValid = true;
            }
            if (isValid){
                if(side1 == side2 && side2 == side3){
                    console.log(`sides ${side1}, ${side2}, ${side3}
                    forms an equilateral triangle`);
                }else if(side1 == side2 || side2 == side3 || side1 == side3){
                    console.log(`Sides ${side1}, ${side2}, ${side3} it forms
                    an isosceles triangle`);
                }else{
                    console.log(`${Side1}, ${side2}, ${side3} is forms a scales
                    triangle`)
                }
            }
            if(isValid == false){
                console.log("Sorry that is invalid triangle");
            }
    }
    checkTriangle(4, 4, 4);
    checkTriangle(2, 3, 3);
    checkTriangle(1, 2, 3);
    checkTriangle(2, 2, 3);

    