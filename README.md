# uniki

[![Build Status](https://travis-ci.org/nelsonic/uniki.svg)](https://travis-ci.org/nelsonic/uniki)
[![Code Climate](https://codeclimate.com/github/nelsonic/uniki/badges/gpa.svg)](https://codeclimate.com/github/nelsonic/uniki)
[![Test Coverage](https://codeclimate.com/github/nelsonic/uniki/badges/coverage.svg)](https://codeclimate.com/github/nelsonic/uniki/coverage)
[![Dependency Status](https://david-dm.org/nelsonic/uniki.svg)](https://david-dm.org/nelsonic/uniki)
[![devDependency Status](https://david-dm.org/nelsonic/uniki/dev-status.svg)](https://david-dm.org/nelsonic/uniki#info=devDependencies)
[![Node.js Version][node-version-image]][node-version-url]
[![NPM Version][npm-image]][npm-url]

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

## How many IDs?

Getting the [**base64**](http://en.wikipedia.org/wiki/Base64) "digest"
of the `sha512` of a string means we have a **64 character** population (potential characters):  
```sh
A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, /
```
Which means we can have
[64<sup>8</sup>](http://www.wolframalpha.com/input/?i=64+to+the+power+of+8)
= 281,474,976,710,656 or ***281 Billion*** *possible* IDs.
(way more than we will *ever* need!)


## Hold On, This Sounds Familiar ...

*If* this ***looks familiar***, its because it is!!  
We have built a virtually identical module: https://www.npmjs.com/package/perma  
The key (*see what we did there...?*) ***difference is*** that we are not excluding any characters from the population because no *humans* are
going to be typing these keys, they are used exclusively by
our database as keys.  
Also similar is https://www.npmjs.com/package/aguid
but ***uniki*** we ***don't want*** our **keys** to be ***36 characters*** **long**!

[node-version-image]: https://img.shields.io/node/v/uniki.svg?style=flat
[node-version-url]: http://nodejs.org/download/
[npm-image]: https://img.shields.io/npm/v/uniki.svg?style=flat
[npm-url]: https://npmjs.org/package/uniki
