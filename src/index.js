class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.storage = String(initialValue);
    this.powStorage = [];
  }

  add(number) {
	  this.initialValue += number;
    this.storage += " + " + String(number);
    this.powStorage = [];
	  return this;
  }
  
  subtract(number) {
    this.initialValue -= number;
    this.powStorage = [];
    this.storage += " - " + String(number);
	  return this;
  }

  multiply(number) {
    this.storage += " * " + String(number);
    this.powStorage = [];
    this.initialValue = eval(this.storage);
    return this;
  }


  devide(number) {
    this.storage += " / " + String(number);
    this.powStorage = [];
    this.initialValue = eval(this.storage);
    return this;
  }

  pow(number) {
    var previousBase = parseInt(this.storage.match(/[\d-]+$/));
    if (this.powStorage.length === 0){
      this.powStorage.push(previousBase);
      this.powStorage.push(number);
      var poweredValue = Math.pow(previousBase,number);
      this.storage = this.storage.replace(/[\d-]+$/, String(poweredValue));
    }
    else{
      this.powStorage.push(number);
      var newPoweredValue = this.powStorage[this.powStorage.length - 1];
      for (var i = this.powStorage.length - 2; i > 0; i--){
        newPoweredValue = Math.pow(this.powStorage[i], newPoweredValue);
      }
      var poweredValue = Math.pow(this.powStorage[0],newPoweredValue);
      this.storage = this.storage.replace(/[\d-]+$/, String(poweredValue));
    }   
    this.initialValue = eval(this.storage);
    return this;
  }

  valueOf() { 
    return this.initialValue; 
    }
}


module.exports = SmartCalculator;