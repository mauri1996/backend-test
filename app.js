const express = require('express')
var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var add = require("./test/Add");
var request = require("request");

const app = express()
const port = 3000

app.get('/', (req, res) => {
  
  // describe("Addition",function(){
  //     it("The function should add 2 numbers",function() {
  //         var value=add.AddNumber(5,6);
  //     expect(value).toBe(11);
  //     });
  // });
  // jasmine.execute();
  res.send('Test Verification and validation Software 1')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})