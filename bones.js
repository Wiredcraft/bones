if (global.__BonesPlugin__) {
    console.trace("\033[0;31mMultiple instances of bones are not supported.\033[0m");
    process.exit(1);
}

exports.$ = require('jquery');
exports._ = require('underscore');
exports.mirror = require('mirror');

exports.utils = require('bones/server/utils');
exports.middleware = require('bones/server/middleware');

exports.server = true;

exports.Backbone = require('bones/server/backbone');
exports.Controller = require('bones/server/controller');
exports.Model = require('bones/server/model');
exports.Collection = require('bones/server/collection');
exports.Router = require('bones/server/router');
exports.View = require('bones/server/view');
exports.Server = require('bones/server/server');
exports.Command = require('bones/server/command');

exports.load = function(dir) {
    return exports.plugin.load(dir);
};

exports.start = function() {
    return exports.plugin.start();
};

var Plugin = require('./server/plugin');
exports.plugin = global.__BonesPlugin__ = new Plugin();
exports.plugin.load(__dirname);
