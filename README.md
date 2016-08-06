[![Coverage Status](https://coveralls.io/repos/github/matutter/prefix-search/badge.svg?branch=master)](https://coveralls.io/github/matutter/prefix-search?branch=master) [![Build Status](https://travis-ci.org/matutter/prefix-search.svg?branch=master)](https://travis-ci.org/matutter/prefix-search) [![dependencies Status](https://david-dm.org/matutter/prefix-search/status.svg)](https://david-dm.org/matutter/prefix-search)
# prefix-search
Prefix search finds the item in a list that has the longest matching prefix.

Using simple prefix searches will return the shortest matching string, or object based on the criterion.

```javaScript
const psearch = require('prefix-search')
var searchTerm = 'awe'
var docs = [{name: 'awesome'}, {name: 'awe! Kittens'}]
var res = psearch.objects(searchTerm, 'name', 'name', docs)
// res = {name, 'awesome'}; this string matched the most
```
```ps.search``` returns the index of the best matching word. ```ps.words``` returns the string best matching the prefix, though ```-1``` is still returned when there is no match.

```javascript
var words = ['aabb', 'abba']
var index = psearch.search('aa', words)
console.log(index == 0) // returns index 0
index = psearch.words('bb', words) 
console.log(index == -1) // returns -1, "no match"
```

(WIP) Using the complex prefix search finds the item with the best matching critia within complex strings.

```javascript
var res = psearch.Objects(searchTerm, 'name', docs)
// res = {name: 'awe! Kittens'}; the string 'awe' is an exact match
```
