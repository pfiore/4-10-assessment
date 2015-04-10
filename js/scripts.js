var triangleCheck = function(sideA, sideB, sideC) {

    if (sideA == sideB && sideB == sideC)
    {
        return "equilateral";
    }

    else if ((sideA == sideB) || (sideB == sideC) || (sideC == sideA))
    {
        return "isosceles";
    }

    else if (sideA !== sideB && sideB !== sideC && sideC !== sideA)
    {
        return "scalene";
    }
    else {
        return "error";
    }


};
