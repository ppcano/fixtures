
/**
 * Module dependencies.
 */

var fs = require('fs')
  , path = require('path');


exports.version = '0.0.2';

/**
 * Fixtures constructor.
 *
 */

function Fixtures () {

  this.fixtures = {};


  var  fixtures_tmp = {}
      , fixtures_path = _find_fixtures_path();  
  
  if ( !fixtures_path ) throw new Error('fixtures path not found');

  var files = fs.readdirSync(fixtures_path); 

  files.forEach(function(file){

      var file_name = file.replace('.js', '');
      fixtures_tmp[file_name] = JSON.parse( fs.readFileSync( path.join(fixtures_path, file), 'utf8') ); 

  });

  this.fixtures = fixtures_tmp; 

  this.reload();

};


/**
 * Reload all the fixtures
 *  It is commonly used on setup when the fixtures has been modified.
 *  
 * @api public
 */

Fixtures.prototype.reload = function () {

  var i
    , fxs = _clone(this.fixtures);
    

  for ( i in fxs ) {
    if ( fxs.hasOwnProperty(i) ) {

      this[i]= fxs[i];
      
    }
  };

};


/**
 * Deep clone of JSON Object
 *
 * @param {Object} param
 * @return {Object}
 * @api private
 */

function _clone (param) {

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
      result[i] = _clone(param[i]);


    return result;
};


/**
 * Find the path where the fixtures are located
 *
 * @return {String}
 * @api private
 */
function _find_fixtures_path () {
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

    if ( fs.existsSync( fixtures_path ) ) return  fixtures_path;
       
  }
  

};


module.exports = exports = new Fixtures();




