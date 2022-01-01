var request = require("request");

var base_url = "https://vyv-test-api.herokuapp.com/api/films"

reponse= '[{"id": "1", "director": "Robert Zemeckis", "length": "8520", "title": "Forrest Gump", "year": "1994"}, {"id": "2", "director": "Steven Spielberg", "length": "8500", "title": "Indiana Jones 1", "year": "1981"}, {"id": "3", "director": "Joss Whedon", "length": "8600", "title": "Avengers", "year": "2012"}]';
describe("All information ",function(){
    it("The answer should be the all films informations.", function(done) {
        request.get(base_url, function(error, response, body) {   
            expect(response.body).toEqual(reponse);
            done();
        });
    });
});
