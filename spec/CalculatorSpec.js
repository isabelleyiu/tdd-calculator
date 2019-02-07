describe("Calculator", function() {
  var Calculator = require('../app/Calculator');
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should be able to return a single-digit integer", function() {
    expect(calculator.calculate("2")).toEqual(2);
  });

  describe("when given two arguments and one operator", function() {

    it("should add", function() {
      expect(calculator.calculate("3 + 5")).toEqual(8);
    });

    it("should subtract", function() {
      expect(calculator.calculate("9 - 2")).toEqual(7);
    });
  });

  describe("when given multiple-digit numbers", function() {
    it("should print out a single positive integer", function() {
      expect(calculator.calculate("123")).toEqual(123);
    });

    it("should add", function() {
      expect(calculator.calculate("12 + 5")).toEqual(17);
    });

    it("should subtract", function() {
      expect(calculator.calculate("88 - 32")).toEqual(56);
    });
  });

  describe("when given an empty string", function() {
    it("should return 0", function() {
      expect(calculator.calculate("")).toEqual(0);
    });
  });

  describe("when given a string with leading or trailing spaces", function() {
    it("should add", function() {
      expect(calculator.calculate(" 1 + 2")).toEqual(3);
    });

    it("should add", function() {
      expect(calculator.calculate("9 - 5 ")).toEqual(4);
    });
  });
  
  describe("when given a string 2 operators and 3 numbers", function() {
    it("should add", function() {
      expect(calculator.calculate("1 + 2 + 3")).toEqual(6);
    });
  });

  describe("when given multiple operators", function() {
    it("should calculate the result", function() {
      expect(calculator.calculate("10 + 2 - 4 + 4 - 10")).toEqual(2);
    });
  });

});
