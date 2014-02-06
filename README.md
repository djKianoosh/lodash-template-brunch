lodash-template-brunch
===
Gives [Brunch](http://brunch.io) workflows the ability to precompile [Lo-Dash](http://lodash.com/) templates.

Installing
===
lodash-template-brunch is designed to be an npm package for use with the build tool Brunch. To install this as a dependency for your Brunch repository, run `npm install --save lodash-template-brunch`, which will add a line to your `package.json` file.

Usage
===
To specify an encoding you can use the configuration options.

```coffeescript
exports.config =
  plugins:
    lodash_template:
      variable: null
      namespace: "module.exports"
```

The values given are the defaults for the options.

* `String` or `null` **variable** is equivalent to the option in Lo-Dash. As Lo-Dash's [documentation](http://lodash.com/docs#template) states, this represents the "data object variable name" and ensures that "a with-statement isn't used in the compiled template" if a non-null value for it is specified.

* `String` **namespace** The namespace option allows you to set the object into which the files are compiled. That is, each filename will be turned into the key of the namespace object, and its value will be the source of the compiled template. The string will be printed directly to the source code of the output file, and is therefore interpreted as Javascript.

