var triangleCheck = function(sideA, sideB, sideC) {

    var sideA = 1;
    var sideB = 1;
    var sideC = 2;


    if (sideA == sideB && sideB == sideC)
    {
        return "equilateral";
    }

    else if ((sideA == sideB) || (sideB == sideC) || (sideC == sideA))
    {
        return "isosceles";
    }

    else if (sideA! = sideB && sideB! = sideC && sideC! = sideA)
    {
        return "scalene";
    }
    else {
        return "error";
    }


};
