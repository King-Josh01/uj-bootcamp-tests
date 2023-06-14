describe('Test my regCheck function' , function(){
    it("it should return true when passed with ''DC 55 YU GP', 'GP'' " , function(){
        assert.equal(true, regCheck ("DC 55 YU GP", "GP"), "this should not be true");

    });

    it("it should return false when passed with ''DC 55 YU GP', 'EC'' " , function(){
        assert.equal(false, regCheck ("DC 55 YU GP", "EC"), "this should not be false");
        
    });
});