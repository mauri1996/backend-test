const getInformation=function(name='Juan')
{
    return {'name':name, 'age':25 , 'cel':123456};
};

describe("Get information Function",function(){
    it("It should return a Object with user information",function() {
        var info=getInformation('Juan');
        // expect(info).toBe({'name':'Juan', 'age':25 , 'cel':123456});
        expect(info).toEqual({'name':'Juan', 'age':25 , 'cel':123456});
    });
});
