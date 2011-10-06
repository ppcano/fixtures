
var should = require("should")
  , fx = require('../../');


var male;
var modified = 5;

module.exports = {

  
  setup: function (done) {


    done();
  },

  teardown: function (done) {


    done();
  },

  test1: function (done) {
    

    fx.users.male = modified;

    fx.reload();
    done();
  },

  fixtures_are_not_modified_because_reload_was_executed: function (done) {
    

    fx.users.male.should.not.eql(modified);

    fx.users.male = modified;

    done();
  },

  fixtures_are_modified_because_reload_was_not_executed: function (done) {
    

    fx.users.male.should.eql(modified);

    done();
  }


};
