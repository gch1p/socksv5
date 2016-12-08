var fs = require('fs'),
    path = require('path');

['server', 'client', 'Agents'].forEach(function(f) {
  var exp = require('./lib/' + f),
      keys = Object.keys(exp);
  for (var i = 0, len = keys.length; i < len; ++i)
    exports[keys[i]] = exp[keys[i]];
});

exports.auth = {
  None: require('./lib/auth/None'),
  UserPassword: require('./lib/auth/UserPassword')
};
