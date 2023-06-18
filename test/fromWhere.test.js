describe('Test my fromWhere function' , function(){
    it("it should return Bellville when passed with 'CY 567489' " , function(){
        assert.equal("Bellville", fromWhere ("CY 567489"), "this should not be true");

    });

    it("it should return Paarl when passed with 'CJ 343502' " , function(){
        assert.equal("Paarl", fromWhere ("CJ 343502"), "this should not be false");
        
    });
});