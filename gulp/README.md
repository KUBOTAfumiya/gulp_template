# Gulp Template


## Overview

- Gulp for Taskrunner
- webpack for CommonJS
- Babel for ES6
- UnitTest by Mocha, Power-Assert, Sinon


## Usage

```
$ npm install
```

unit test

```
$ gulp test
```

watch and server  

```
# Default Watch
$ gulp

# Watch for SP（assets/sp)
gulp -sp
```

distribution  

```
$ gulp dist
```


## HTML

assets

```javascript
templates/
  ├─partials/...
  ├─_index.ejs
  ├─index.ejs
  └─pageSample/
    ├─partials/...
    └─index.ejs
```

dist

```javascript
index.html
  └─pageSample
    └─index.html
```


## CSS

assets

```javascript
styl/
  ├─common/
  │  ├─base/...
  │  ├─function/...
  │  ├─layout/...
  │  ├─module/...
  │  └─var/...
  ├─index/
  │  ├─layout/...
  │  ├─modules/...
  │  └─index.styl
  └samplePage/
    ├─layout/...
    ├─modules/...
    └─index.styl
```

dist

```javascript
css/
  ├─index/
  │  └─index.css
  └pageSample/
    └─index.css
```

## JS

assets

```javascript
js/
  ├─_index.js
  ├─index.js
  ├─samplePage.js
  ├─modelss/...
  ├─modules/
  │  ├─fn/...
  │  ├─ui/...
  │  ├─utils/...
  │  └─vendor/...
  └─views/
    ├─base/...
    ├─index/...
    └─pageSample/...
```

dist

```javascript
js/
  ├─_index.js
  ├─index.js
  └─samplePage.js
```

## IMG

assets

```javascript
img/
  ├─common/...
  ├─index/...
  └─samplePage/...
_imgSprites/...
```

dist

```javascript
img/
  ├─common/
  │  └─sprites.png
  ├─index/...
  └─samplePage/...
```


### Tools

- [HTMLHint](http://htmlhint.com/)
- [JSHint](http://jshint.com/)
- [Stylus](https://learnboost.github.io/stylus/)
- [EJS](http://www.embeddedjs.com/)
- [Babel](https://babeljs.io/)
- [Webpack](http://webpack.github.io/)
- [Karma](https://karma-runner.github.io/0.13/index.html)
- [PhantomJS](http://phantomjs.org/)
- [Mocha](http://mochajs.org/)
- [PowerAssert](https://github.com/power-assert-js/power-assert)
- [Sinon](http://sinonjs.org/)
