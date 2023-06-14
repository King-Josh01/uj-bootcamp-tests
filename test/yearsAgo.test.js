describe('Test my yearsAgo function' , function(){
    it("it should return 47 when passed with '1976' " , function(){
        assert.equal(47, yearsAgo (1976), "this should not be true");

    });

    it("it should return 0 when passed with '2023' " , function(){
        assert.equal(0, yearsAgo (2023), "this should not be false");
        
    });
});