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


});
