const getValid=function(valid='1')
{
    return valid=='1'? true: false;
};

describe("Get validation number",function(){
    it("It should return a valid number",function() {
        var info=getValid('1');    
        expect(info).toBe(true);
    });
});
