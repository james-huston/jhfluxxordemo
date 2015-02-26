
var React = require('react');
var fluxxor = require('fluxxor');
var AppStore = require('./lib/appstore');
var debug = require('debug')('app:index');
var Application = require('./react/application.jsx');

var stores = {
  AppStore: new AppStore()
};

var flux = new fluxxor.Flux(stores, {});

flux.on('dispatch', function (type, payload) {
  debug('hello world!');
});

React.render(<Application flux={flux} />, document.getElementById('app'));

