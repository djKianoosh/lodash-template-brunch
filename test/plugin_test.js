describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok;
  });

  it('should has #compile method', function() {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('should compile and produce valid result', function(done) {
    var content = '<strong><%= weak %></strong>';
    var expected = '<strong>wat</strong>';

    plugin.compile(content, 'template.html', function(error, data) {
      expect(error).not.to.be.ok;
      eval(data);
      expect(module.exports["template"]({weak: "wat"})).to.equal(expected);
      done();
    });
  });

  it('should compile with the variable option', function(done) {
    plugin = new Plugin({plugins: {lodash_template: {variable: "data"}}})

    var content = '<strong><%= data.weak %></strong>';
    var expected = '<strong>wat</strong>';

    plugin.compile(content, 'template.html', function(error, data) {
      expect(error).not.to.be.ok;
      eval(data);
      expect(module.exports["template"]({weak: "wat"})).to.equal(expected);
      done();
    });
  });

  it('should compile correctly with the namespace option', function(done) {
    plugin = new Plugin({plugins: {lodash_template: {namespace: "module.tnamespace", variable: "data"}}})

    var content = '<strong><%= data.weak %></strong>';
    var expected = '<strong>wat</strong>';

    plugin.compile(content, 'template.html', function(error, data) {
      expect(error).not.to.be.ok;
      module.tnamespace = {};
      eval(data);
      expect(module.tnamespace["template"]({weak: "wat"})).to.equal(expected);
      done();
    });
  });

});
