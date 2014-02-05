(function() {
  var LodashCompiler, _template, _path;

  _template = require('lodash.template');
  _path = require('path');


  module.exports = LodashCompiler = (function() {

    LodashCompiler.prototype.brunchPlugin = true;
    LodashCompiler.prototype.type = 'template';
    LodashCompiler.prototype.extension = 'tpl';
    LodashCompiler.prototype.pattern = /\.(?:tpl|html)$/;

    function LodashCompiler(config) {
      this.config = (config.plugins && config.plugins.lodash_template) || {};
      this.config.variable = (this.config.variable == null) ? null : this.config.variable;
      this.config.namespace = (this.config.namespace == null) ? "module.exports" : this.config.namespace;
      null;
    }

    LodashCompiler.prototype.compile = function(data, path, callback) {
      var content, error, result, baseFilename;
      try {
        content = _template(data, null, {"variable": this.config.variable}).source;
        baseFilename = _path.basename(path, this.pattern.exec(path)[0]);
        return result = this.config.namespace + '["' + baseFilename +'"] = ' + content + ';';
      } catch (err) {
        return error = err;
      } finally {
        callback(error, result);
      }
    };

    return LodashCompiler;

  })();

}).call(this);
