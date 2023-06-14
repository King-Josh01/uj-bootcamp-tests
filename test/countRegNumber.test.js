describe('Test my countRegNumber function' , function(){
    it("it should return true when passed with 'CA 182736,CY 523519,CJ 812328' " , function(){
        assert.equal(true, countRegNumber ("3"), "this should not be true");

    });

    it("it should return false when passed with 'CA 182736,CY 523519,CJ 812328' " , function(){
        assert.equal(false, countRegNumber ("1"), "this should not be false");
        
    });
});