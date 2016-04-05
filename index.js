'use strict';

/**
 * Decorate a `namespace` getter onto `app`
 */

module.exports = function(options) {
  var namespace;

  return function plugin(app) {
    if (!this.isApp) return;
    if (this.isRegistered('base-namespace')) return;

    Object.defineProperty(this, 'namespace', {
      configurable: true,
      enumerable: true,
      set: function(val) {
        namespace = val;
      },
      get: function() {
        if (namespace) return namespace;
        var alias = this.alias || this._name;
        var parent = this.parent;
        if (parent) {
          return parent.namespace + '.' + alias;
        }
        return alias;
      }
    });
    return plugin;
  };
};
