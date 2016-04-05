'use strict';

/**
 * Decorate a `namespace` getter onto `app`
 */

module.exports = function(options) {
  return function plugin(app) {
    if (!this.isApp) return;
    if (this.isRegistered('base-namespace')) return;
    var namespace;

    Object.defineProperty(this, 'namespace', {
      configurable: true,
      enumerable: true,
      set: function(val) {
        namespace = val;
      },
      get: function() {
        if (namespace) return namespace;
        var alias = this.alias || this._name;
        if (this.parent) {
          return this.parent.namespace + '.' + alias;
        }
        return alias;
      }
    });
    return plugin;
  };
};
