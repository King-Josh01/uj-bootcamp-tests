describe('Test my totalPhoneBill function' , function(){
    it("it should return R7.45 when passed with 'call, sms, call, sms, sms' " , function(){
        assert.equal("R7.45", totalPhoneBill ("call, sms, call, sms, sms"), "this should not be true");

    });

    it("it should return R3.40 when passed with 'call, sms' " , function(){
        assert.equal('R3.40', totalPhoneBill ("call, sms"), "this should not be false");
        
    });
});