var BudToken = artifacts.require('BudToken')
contract('BudToken', function(accounts) {
    it('Sets the total supply upon deployment', function() {
        return BudToken.deployed().then(function(instance) {
            tokenInstance = instance
            return tokenInstance.totalSupply()
        }).then(function(totalSupply) {
            assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000')
        })
    })
})

