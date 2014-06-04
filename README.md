stream-spy
==========

A tiny module to help in testing streams. Buffers up the stream as it passes
through the spy and calls given callback with said data when finished

## Example usage

```js
var fs        = require('fs')
  , streamSpy = require('stream-spy')
  , transform = require('some-transform')

var spy = streamSpy(function (data) {
  //perform expectations on data here
  //eg. expect(data.length).to.equal(2)
})

fs.createReadStream('sometextfile.txt')
  .pipe(transform)
  .pipe(spy)
```

