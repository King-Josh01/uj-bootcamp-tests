describe('Test my isFromBellville function' , function(){
    it("it should return true when passed with 'CY 123' " , function(){
        assert.equal(true, isFromBellville ("CY 123"), "this should not be true");

    });

    it("it should return false when passed with 'CJ 123' " , function(){
        assert.equal(false, isFromBellville ("CJ 123"), "this should not be false");
        
    });
});