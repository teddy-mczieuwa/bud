const BudToken = artifacts.require("BudToken");

module.exports = function (deployer) {
  deployer.deploy(BudToken);
};