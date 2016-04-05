'use strict';

require('mocha');
var assert = require('assert');
var namespace = require('./');
var Base = require('base');
var app;

describe('base-namespace', function() {
  beforeEach(function() {
    app = new Base();
    app.isApp = true;
    app.use(namespace());
  });

  it('should export a function', function() {
    assert.equal(typeof namespace, 'function');
  });

  it('should decorate a `namespace` getter onto the instance`', function() {
    assert.equal(typeof app.namespace, 'string');
  });

  it('should be app._name when app.alias is undefined', function() {
    assert.equal(app.namespace, 'base');
  });

  it('should be app.alias when defined', function() {
    app.alias = 'foo';
    assert.equal(app.namespace, 'foo');
  });

  it('should be app.parent.namespace + app.alias when parent is defined', function() {
    var parent = new Base();
    parent.isApp = true;
    parent.use(namespace());
    app.alias = 'foo';
    app.parent = parent;
    assert.equal(app.namespace, 'base.foo');
  });
});
