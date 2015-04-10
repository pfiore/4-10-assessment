var triangleCheck = function(sideA, sideB, sideC) {


    if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB)
    {
        return "error, not a triangle"
    }

    if (sideA == 0 && sideB == 0 && sideC == 0)
    {
        return "error, not a triangle"
    }

    if (sideA == 0 || sideB == 0 || sideC == 0)
    {
        return "error, not a triangle"
    }

    if (sideA == sideB && sideB == sideC)
    {
        return "equilateral";
    }

    if ((sideA == sideB) || (sideB == sideC) || (sideC == sideA))
    {
        return "isosceles";
    }

    if (sideA !== sideB && sideB !== sideC && sideC !== sideA)
    {
        return "scalene";
    }

};
