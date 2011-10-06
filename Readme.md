
# Fixtures

  Tests with fixtures data as JSON.
  

## Installation

Install via npm:

    $ npm install fixtures

## Usage

The project will look for a directory named  `fixtures` which must be child of your `test` directory in order to load all the fixtures:

test\fixtures\users.js

```js
  {
    "my_own_user": {
      "name": "Charles",
      "type": "M"
    },
    "female": {
      "name": "Susana",
      "type": "F"
    }
  }
```

Access fixtures depending on the name you gave to your fixtures files.
 
```js

  fx = require('fixtures');

  fx.users.my_own_user.name; ("Charles")

```

Reload the fixtures on either setup or teardown when the fixtures were modified on tests
 
```js

  fx.reload();

```

## License

(The MIT License)

Copyright (c) 2011 Pepe Cano &lt;ppcanodehuelva@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
