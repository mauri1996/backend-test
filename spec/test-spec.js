// const add = require("../src/Add");
// import {AddNumber} from "./AddNumber";
var request = require("request");
// import {request} from "request";

const AddNumber=function(a,b)
{
    return a+b;
};

// describe("Addition",function(){
//     it("The function should add 2 numbers",function() {
//         var value=AddNumber(5,6);
//     expect(value).toBe(11);
//     });
// });

var base_url = "http://localhost:5000/data"
describe("Promedio",function(){
    it("the functioon debe devolver hola",function() {
        var value=AddNumber(5,6);
    expect(value).toBe(11);
    });
    it("the functioon debe devolver hola", function(done) {
        request.get(base_url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});