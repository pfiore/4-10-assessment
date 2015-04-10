var triangleCheck = function(sideA, sideB, sideC) {

    if (sideA == 0 && sideB == 0 && sideC == 0)
    {
        return "error, not a triangle, enter numbers"
    }

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
