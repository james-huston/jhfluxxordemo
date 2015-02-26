
var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var debug = require('debug')('app:react:application');

var Application = module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("AppStore")],

  getInitialState: function () {
    return {
      greeting: ''
    };
  },

  getStateFromFlux: function () {
    var flux = this.getFlux();
    return {
      appData: flux.store('AppStore').getState()
    };
  },

  onClickHello: function () {
    debug('clicky clicky', this.state);
    this.setState({ greeting: 'Hello World!' });
  },

  render: function () {
    return (
      <div>
        <div>{this.state.greeting || this.state.appData.state.defaultGreeting}</div>
        <button onClick={this.onClickHello}>Say Hello</button>
      </div>
    );
  }
});
