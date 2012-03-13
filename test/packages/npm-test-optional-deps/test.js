var fs = require("fs")
var assert = require("assert")
var path = require("path")

// sax should be the only dep that ends up installed
assert.deepEqual(fs.readdirSync(path.resolve(__dirname, "node_modules")
                               ,["sax"]))
assert.equal(require("sax/package.json").version, "0.3.5")