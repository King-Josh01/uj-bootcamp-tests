describe('Test my countRegNumber function' , function(){
    it("it should return 3 when passed with 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123' " , function(){
        assert.equal(3, countAllPaarl ("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"), "this should not be true");

    });

    it("it should return 2 when passed with 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123' " , function(){
        assert.equal(3, countAllPaarl ("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"), "this should not be false");
        
    });
});