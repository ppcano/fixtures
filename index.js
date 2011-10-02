
var fs = require('fs')
  , path = require('path');


function Fixtures () {
  this.init();
};



Fixtures.prototype.init = function () {
  
  var fixtures = {}
      , i
      , fixtures_path = this._find_fixtures_path();  
  
  if ( !fixtures_path ) throw new Error('fixtures path not found');
  console.log( fixtures_path );
  var files = fs.readdirSync(fixtures_path); 

  files.forEach(function(file){

      var file_name = file.replace('.js', '');
      fixtures[file_name] = JSON.parse( fs.readFileSync( path.join(fixtures_path, file), encoding='utf8') ); 

  });


  for ( i in fixtures ) {
    if ( fixtures.hasOwnProperty(i) ) {

      this[i]= fixtures[i];
      
    }
  };

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


