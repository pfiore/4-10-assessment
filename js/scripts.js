var triangleCheck = function(sideA, sideB, sideC) {




    if (sideA == 0 && sideB == 0 && sideC == 0)
    {
        return "error, must enter a number for all inputs"
    }

    if (sideA == 0 || sideB == 0 || sideC == 0)
    {
        return "error, all inputs must be valid numbers"
    }

    if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB)
    {
        return "error, one input cannot equal more than the other two combined"
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
