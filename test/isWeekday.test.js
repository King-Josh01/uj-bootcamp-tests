describe('Test my isWeekday function' , function(){
    it("it should return true when passed with 'Monday' " , function(){
        assert.equal(true, isWeekday ("Monday"), "this should not be true");

    });

    it("it should return false when passed with 'Saturday' " , function(){
        assert.equal(false, isWeekday ("Saturday"), "this should not be false");
        
    });
});