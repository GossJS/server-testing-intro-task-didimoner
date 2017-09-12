const request = require("request");
const assert = require('assert');

const base_url = "https://node-works-didimoner.c9users.io/length";

let query = '';

describe("Hello World Test", function(){

    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });
        
        query = '';
        it(`should return ${query.length}`, function(done) {
            request.get(`${base_url}?${query}`, function(error, response, body) {
                assert.equal(query.length, body);
                done();
            });
        });
        
        query = '0';
        it(`should return ${query.length}`, function(done) {
            request.get(`${base_url}?${query}`, function(error, response, body) {
                assert.equal(query.length, body);
                done();
            });
        });
        
        query = '*/^!&!';
        it(`should return ${query.length}`, function(done) {
            request.get(`${base_url}?${query}`, function(error, response, body) {
                assert.equal(query.length, body);
                done();
            });
        });
        
        query = '123';
        it(`should return ${query.length}`, function(done) {
            request.get(`${base_url}?${query}`, function(error, response, body) {
                assert.equal(query.length, body);
                done();
            });
        });
        
        query = 'qwertsdhjk';
        it(`should return ${query.length}`, function(done) {
            request.get(`${base_url}?${query}`, function(error, response, body) {
                assert.equal(query.length, body);
                done();
            });
        });
        
    });

});