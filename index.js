
/**
 * Module dependencies.
 */

var fs = require('fs')
  , path = require('path');


/**
 * Fixtures constructor.
 *
 */

function Fixtures () {
  this.fixtures = {};
  this._init();
};



/**
 * Reload all the fixtures
 *  It is commonly used on setup when the fixtures has been modified.
 *  
 * @api public
 */

Fixtures.prototype.reload = function () {

  var fxs = this._clone(this.fixtures);

  // TODO: check whether i is a function on this (ex: reload )
  for ( i in fxs ) {
    if ( fxs.hasOwnProperty(i) ) {

      this[i]= fxs[i];
      
    }
  };

};

Fixtures.prototype._init = function () {
  
  var  fixtures_tmp = {}
      , fixtures_path = this._find_fixtures_path();  
  
  if ( !fixtures_path ) throw new Error('fixtures path not found');

  var files = fs.readdirSync(fixtures_path); 

  files.forEach(function(file){

      var file_name = file.replace('.js', '');

      fixtures_tmp[file_name] = JSON.parse( fs.readFileSync( path.join(fixtures_path, file), encoding='utf8') ); 

  });

  this._load(fixtures_tmp);
};

Fixtures.prototype._load = function (items) {

  this.fixtures = items; 

  this.reload();

};

// only clone the properties of JSON data, nothing about function or date
Fixtures.prototype._clone = function (param) {

    var result;

    if (typeof param === 'undefined')
      return undefined;
    else if (param instanceof Array)
      result = [];
    else if (typeof param === 'object')
      result = {};
    else
      return param;

    for (var i in param)
      result[i] = this._clone(param[i]);


    return result;
};

Fixtures.prototype._find_fixtures_path = function () {
  var current_dir = path.join( module.parent.filename, '..')
    , base_dir = path.basename(current_dir)
    , fixtures_path;

  // TODO exit strategy can be improved.
  while( base_dir !== 'test' && base_dir !=='' ) {

    current_dir = path.join( current_dir, '..');
    base_dir = path.basename(current_dir);
  }

  if ( base_dir === 'test' ) {

    fixtures_path = path.join( current_dir, 'fixtures');

    if ( path.existsSync( fixtures_path ) ) return  fixtures_path;
       
  }
  

};

module.exports = exports = new Fixtures();

