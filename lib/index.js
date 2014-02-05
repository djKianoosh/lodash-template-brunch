(function() {
  var LodashCompiler, _template;

  _template = require('lodash.template');

  module.exports = LodashCompiler = (function() {

    LodashCompiler.prototype.brunchPlugin = true;

    LodashCompiler.prototype.type = 'template';

    LodashCompiler.prototype.extension = 'tpl';

    LodashCompiler.prototype.pattern = /\.(?:tpl|html)$/;

    function LodashCompiler(config) {
      this.config = config;
      null;
    }

    LodashCompiler.prototype.compile = function(data, path, callback) {
      var content, error, result;
      try {
        content = _template(data).source;
        return result = "module.exports = " + content + ";";
      } catch (err) {
        return error = err;
      } finally {
        callback(error, result);
      }
    };

    return LodashCompiler;

  })();

}).call(this);
