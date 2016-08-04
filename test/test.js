var ps = require('..')
var assert = require('chai').assert
var words = ['prefix', 'scotch', 'tape', 'search', 'prefix-search']
var objects = words.map(word => ({key:word}))


describe('ps.prefixSearchWord on an array of string with atleast one match', ()=> {
  it('will return the shortest word, which is the most complete match', ()=> {
    var res = ps.prefixSearchWord('pre', words)
    assert.equal(res, 'prefix')    
  })
})

describe('ps.prefixSearchWord on an array of string with no match', ()=> {
  it('will return -1', ()=> {
    var res = ps.prefixSearchWord('nothing', words)
    assert.equal(res, -1)    
  })
})

describe('ps.prefixSearchObject on an array of objects with a string property', ()=> {
  it('will return the object with the shortest matching string property', ()=> {
    var res = ps.prefixSearchObject('sear', 'key', objects)
    assert.deepEqual(res, {key:'search'})    
  })
})
