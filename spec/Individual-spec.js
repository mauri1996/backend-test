var request = require("request");

// https://vyv-test-api.herokuapp.com/api/films
// https://vyv-test-api.herokuapp.com/api/films/[número]
// https://vyv-test-api.herokuapp.com/api/directors

var base_url = "https://vyv-test-api.herokuapp.com/api/films"

rep1= '{"id": "1", "director": "Robert Zemeckis", "length": "8520", "title": "Forrest Gump", "year": "1994"}';
describe("Single information ",function(){
    it("The answer should be the information in film number 1.", function(done) {
        request.get(base_url+'/1', function(error, response, body) {   
            expect(response.body).toEqual(rep1);
            done();
        });
    });
});


rep2='{"id": "2", "director": "Steven Spielberg", "length": "8500", "title": "Indiana Jones 1", "year": "1981"}';
describe("Single information ",function(){
    it("The answer should be the information in film number 2.", function(done) {
        request.get(base_url+'/2', function(error, response, body) {   
            expect(response.body).toEqual(rep2);
            done();
        });
    });
});


rep3='{"id": "3", "director": "Joss Whedon", "length": "8600", "title": "Avengers", "year": "2012"}';
describe("Single information ",function(){
    it("The answer should be the information in film number 3.", function(done) {
        request.get(base_url+'/3', function(error, response, body) {   
            expect(response.body).toEqual(rep3);
            done();
        });
    });
});
