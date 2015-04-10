describe('triangleCheck', function() {
    it("it takes three inputs from user, if all are equal return 'equilateral'", function() {
        expect(triangleCheck(1, 1, 1)).to.equal("equilateral")
    });

    it("it takes three inputs from user, if only two are equal return 'isosceles'", function() {
        expect(triangleCheck(1, 1, 2)).to.equal("isosceles")
    });

    it("it takes three inputs from user, if none are equal return 'scalene'", function() {
        expect(triangleCheck(1, 2, 3)).to.equal("scalene")
    });

    it("it takes three inputs from user, if inputs are all 0 return 'error, not a triangle'", function() {
        expect(triangleCheck(0, 0, 0)).to.equal("error, not a triangle, enter numbers")
    });


});
