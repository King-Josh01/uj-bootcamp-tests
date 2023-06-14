describe('Test my countAllFromTown function' , function(){
    it("it should return 3 when passed with 'CL 124,CY 567,CL 345, CJ 456,CL 341','CL' " , function(){
        assert.equal(3, countAllFromTown ("CL 124,CY 567,CL 345, CJ 456,CL 341","CL"), "this should not be true");

    });

    it("it should return 3 when passed with 'CL 124,CY 567,CL 345, CJ 456,CL 341','CL' " , function(){
        assert.equal(3, countAllFromTown ("CL 124,CY 567,CL 345, CJ 456,CL 341","CL"), "this should not be false");
        
    });
});