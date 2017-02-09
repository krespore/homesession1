// testing code goes here

'use strict'

var chai = require('chai');
var expect = require('expect')
var assert = chai.assert;

var findMinMax = require('../app/findMinMax.js');
 describe('Min-Max Numbers in a List: ', function () {
    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {
      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });
      it('should return [4, 6] for [6, 4]', function () { 
          expect(findMinMax([6, 4])).toEqual([4, 6]);     
       });     
      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);     
      });  
      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 80, 6, 44, 7, 42, 8, 6, 2])).toEqual([2, 80]);     
      });
      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([50, 22, 49, 21, 8, 45])).toEqual([8, 50]);     
      });  
      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([19, 2, 0, 42, 56, 20])).toEqual([0, 56]);     
      });  
      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([8, 98, 422, 1832, 23])).toEqual([8, 1832]);     
      });   
    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {
      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [50] for [50, 50, 50, 50]', function () {
        expect(findMinMax([50, 50, 50, 50])).toEqual([50]);
      });
      it('should return [41] for [41, 41, 41, 41]', function () {
        expect(findMinMax([41, 41, 41, 41])).toEqual([41]);
      });
    });
  });