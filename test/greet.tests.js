// console.log(greet("King Josh"))

describe('Test my greet function' , function(){
    it("it should show 'Hello, King Josh' when called with 'King Josh' " , function(){
        assert.equal("Hello, King Josh", greet("King Josh"), "this should not be true");

        // assert.deepEqual([2,2],[2,2]);
    });

    it("it should show 'Hello, Boitumelo' when called with 'Boitumelo' " , function(){
        assert.equal("Hello, Boitumelo", greet("Boitumelo"), "this should not be true");

        // assert.deepEqual([2,2],[2,2]);
    });
});