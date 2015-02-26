
var fluxxor = require('fluxxor');

module.exports = fluxxor.createStore({
  initialize: function () {
    this.state = {
      defaultGreeting: "Hello Blarg!"
    };
  },

  getState: function () {
    return {
      state: this.state
    };
  }
});
