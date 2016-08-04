function prefixSearch(prefix, words) {
  var len = words.length  
  var mi = -1  
  var ml = Number.MAX_SAFE_INTEGER

  for(var i = 0; i < len; ++i) {
    var word = words[i]
    if(word.startsWith(prefix) && word.length < ml) {
      mi = i
      ml = word.length
    }
  }

  return mi
};

function prefixSearchWord(prefix, words) {
  var i = prefixSearch(prefix, words)
  return i == -1 ? -1 : words[i]
};

function prefixSearchObject(prefix, field, objects) {
  var i = prefixSearch(prefix, objects.map(o=>o[field]))
  return i == -1 ? -1 : objects[i]
}

module.exports.prefixSearchObject = prefixSearchObject
module.exports.prefixSearchWord = prefixSearchWord
module.exports.prefixSearch = prefixSearch

