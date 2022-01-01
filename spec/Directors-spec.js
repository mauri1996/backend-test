var request = require("request");


var base_url_directors = "https://vyv-test-api.herokuapp.com/api/directors"

resp1= '["Robert Zemeckis", "Steven Spielberg", "Joss Whedon"]';
describe("All directors information",function(){
    it("The answer should be the all directors information.", function(done) {
        request.get(base_url_directors, function(error, response, body) {   
            expect(response.body).toEqual(resp1);
            done();
        });
    });
});