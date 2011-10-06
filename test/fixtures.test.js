var should = require("should")
  , fx = require('../');



module.exports = {

  
  load_fixtures: function () {
    

			should.exist(fx.orders);
			should.exist(fx.users);

			should.not.exist(fx.products);
			

  },

  can_access_fixture_data: function () {
    

			should.exist(fx.users.male);
			should.exist(fx.users.female);

			should.not.exist(fx.users.ovni);
			

			should.exist(fx.users.male.type);
			should.exist(fx.users.female.type);

			fx.users.female.type.should.not.equal(fx.users.male.type); 
  },

  clone_works_on_array: function () {
    
      should.ok( fx.grandparents.pa1.childs instanceof Array );
      should.ok( fx.grandparents.pa1.childs[0].grandchilds instanceof Array );

  }


};
