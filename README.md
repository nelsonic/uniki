# uniki

[![Build Status](https://travis-ci.org/nelsonic/uniki.svg)](https://travis-ci.org/nelsonic/uniki)
[![Code Climate](https://codeclimate.com/github/nelsonic/uniki/badges/gpa.svg)](https://codeclimate.com/github/nelsonic/uniki)
[![Test Coverage](https://codeclimate.com/github/nelsonic/uniki/badges/coverage.svg)](https://codeclimate.com/github/nelsonic/uniki/coverage)
[![Dependency Status](https://david-dm.org/nelsonic/uniki.svg)](https://david-dm.org/nelsonic/uniki)
[![devDependency Status](https://david-dm.org/nelsonic/uniki/dev-status.svg)](https://david-dm.org/nelsonic/uniki#info=devDependencies)

![matrix-reloaded-keymaster](http://i.imgur.com/lRpBPXI.jpg)

There are ***many use cases*** for unique keys.

Our ["***itch***"](https://gettingreal.37signals.com/ch02_Whats_Your_Problem.php)
is minimizing the bytes occupied in our database by frequent strings.

Like a *Hash* but shorter.

## Usage

### Install from NPM

```sh
npm install uniki ---save
```

### Use it in your code/script

```js
var uniki = require('uniki');
console.log(uniki('hello world')); // >> MJ7MSJwS    (ALWAYS The Same!)
```

That's all there is to it.
Enjoy!

# tl;dr

## Hold On, This Sounds Familiar ...

*If* this ***looks familiar***, its because it is!!  
We have built a virtually identical module: https://www.npmjs.com/package/perma  
The key (*see what we did there...?*) ***difference is*** that we are not excluding any characters from the population because no *humans* are
going to be typing these keys, they are used exclusively by
our database as keys.  
Also similar is https://www.npmjs.com/package/aguid
but ***uniki*** we ***don't want*** our **keys** to be ***36 characters*** **long**!
