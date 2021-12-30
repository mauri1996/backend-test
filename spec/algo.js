// const add = require("../src/Add");
// import {AddNumber} from "./AddNumber";
// var request = require("request");

const Number=function(a)
{
    return a;
};

describe("Lo mismo",function(){
    it("The function should show",function() {
        var value=Number(6);
    expect(value).toBe(6);
    });
});

// var base_url = "http://localhost:5000/data"
// describe("Promedio",function(){
//     // it("the functioon debe devolver hola",function() {
//     //     var value=add.AddNumber(5,6);
//     // expect(value).toBe(12);
//     // });
//     it("the functioon debe devolver hola", function(done) {
//         request.get(base_url, function(error, response, body) {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });