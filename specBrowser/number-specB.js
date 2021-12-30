const addNumber=function(a,b)
{
    return a+b;
};

const multiply=function(a,b)
{
    return a*b;
};

const factorialRecursivo =function(n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

describe("when calc is used to peform basic math operations",function(){

    //This will be called before running each spec
    beforeEach(function() {
        console.log('Before Each');
    });

    //Spec for sum operation
    it("should be able to calculate sum of 3 and 5",function() {
        expect(addNumber(3,5)).toEqual(8);
    });

    //Spec for multiply operation
    it("should be able to multiply 10 and 40", function() {
        expect(multiply(10, 40)).toEqual(400);
    });

    //Spec for factorial operation for positive number
    it("should be able to calculate factorial of 9", function() {
        expect(factorialRecursivo(9)).toEqual(362880);
    });
});
