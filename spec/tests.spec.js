// testing code goes here

'use strict'

var chai = require('chai');
var expect = require('expect')
var assert = chai.assert;

var dataTypes = require('../app/dataTypes.js');
var getPrimes = require('../app/getPrimes.js');

describe("Data types tests", function(){
  describe("Case for some falsy values", function(){
    it("should return 'no value' for null", function(){
      expect(dataTypes(null)).toEqual('no value');
    });
    it("should return 'no value' for undefined", function(){
      expect(dataTypes(undefined)).toEqual('no value');
    });
  });
  describe("Case for booleans", function(){
    it("should return true for `true`", function(){
      expect(dataTypes(true)).toBe(true);
    });
    it("should return false for `false`", function(){
      expect(dataTypes(false)).toBe(false);
    });
  });
  describe("Case for Numbers", function(){
    it("should return 'less than 100' for 44", function(){
      expect(dataTypes(44)).toBe('less than 100');
    });
    it("should return 'more than 100' for 144", function(){
      expect(dataTypes(144)).toBe('more than 100');
    });
    it("should return 'equal to 100' for 100", function(){
      expect(dataTypes(100)).toBe('equal to 100');
    });
  });
  describe("Case for Strings", function(){
    it("should return the length of `tergiversate`", function(){
      expect(dataTypes('tergiversate')).toBe(12);
    });
    it("should return the length of an empty string", function(){
      expect(dataTypes('')).toBe(0);
    });
    it("should return the length of `555`", function(){
      expect(dataTypes('555')).toBe(3);
    });
  });
  describe("Case for arrays", function(){
    it("should return `2` for `[0, 1, 2]`", function(){
      expect(dataTypes([0, 1, 2])).toBe(2);
    });
    it("should return `undefined` for `[]`", function(){
      expect(dataTypes([])).toBe(undefined);
    });
    it("should return `undefined` for `[4, 9]`", function(){
      expect(dataTypes([4, 9])).toBe(undefined);
    });
  });
  describe("Case for functions", function(){
    it("should call the `callback` function with argument true, and return `called callback`", function(){
      var callback = function(arg){
        expect(arg).toBeTruthy();
        if(arg === true) {
          return 'called callback';
        } 
      };
      expect(dataTypes(callback)).toBe('called callback');
    });
  });
});

describe("Get Prime tests", function() { 
  describe("Case for checking correctness", function() {
    it("should return correct prime values up to 10", function() {
      expect(getPrimes(10)).toEqual([ 2, 3, 4, 5, 7])
    });

    it("should return correct prime values up to 20", function() {
      expect(getPrimes(20)).toEqual([ 2, 3, 4, 5, 7, 11, 13, 17, 19 ])
    });

    it("should return an empty array for 0", function() {
      expect(getPrimes(0)).toEqual([])
    });

    it("should return an empty array for negative values", function() {
      expect(getPrimes(-5)).toEqual([])
    });

    it("should return just 2 if argument is 2", function() {
      expect(getPrimes(2)).toEqual([2])
    });
  }); 
})