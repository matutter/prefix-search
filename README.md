[![Coverage Status](https://coveralls.io/repos/github/matutter/prefix-search/badge.svg?branch=master)](https://coveralls.io/github/matutter/prefix-search?branch=master) [![Build Status](https://travis-ci.org/matutter/prefix-search.svg?branch=master)](https://travis-ci.org/matutter/prefix-search)
# prefix-search
Prefix search finds the item in a list that has the longest matching prefix.

Using simple prefix searches will return the shortest matching string, or object based on the criterion.

```javaScript
const ps = require('prefix-search')
var searchTerm = 'awe'
var docs = [{name: 'awesome'}, {name: 'awe! Kittens'}]
var res = ps.prefixSearchObject(searchTerm, 'name', 'name', docs)
// res = {name, 'awesome'}; the string is shorter
```

(WIP) Using the complex prefix search finds the item with the best matching critia within complex strings.

```javascript
var res = ps.complexSearchObject(searchTerm, 'name', docs)
// res = {name: 'awe! Kittens'}; the string 'awe' is an exact match
```
