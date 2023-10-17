const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

class MyTest {
    constructor() {
      this.prodNames = ["tv", "laptop", "notebook", "phone"];
      this.prices = [400, 500, 200, 700];
      this.quantities = [5, 10, 15, 20];
    }
  
    changeProductName(id, newstring) {
      if (id >= 0 && id < this.prodNames.length) {
        this.prodNames[id] = newstring;
      }
    }
  
    changePrice(id, newPrice) {
      if (id >= 0 && id < this.prices.length) {
        this.prices[id] = newPrice;
      }
    }
  }
  
  describe('MyTest', function () {
    let myTest;
  
    beforeEach(function () {
      myTest = new MyTest();
    });
  
    it('should change product name', function () {
      const indexToChange = 1; 
      const newName = 'newName';
  
      myTest.changeProductName(indexToChange, newName);
      assert.equal(myTest.prodNames[indexToChange], newName);
    });
  
    it('should change product price', function () {
      const indexToChange = 2; 
      const newPrice = 300;
  
      myTest.changePrice(indexToChange, newPrice);
      assert.equal(myTest.prices[indexToChange], newPrice);
    });
  });