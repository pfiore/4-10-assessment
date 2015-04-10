describe('triangleCheck', function() {
    it("it takes three inputs from user, if all are equal return 'equilateral'", function() {
        expect(triangleCheck("sideA, sideB, sideC")).to.equal("equilateral")
    });

    it("it takes three inputs from user, if only two are equal return 'isosceles'", function() {
        expect(triangleCheck("sideA, sideB, sideC")).to.equal("isosceles")
    });
});
