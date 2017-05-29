# HumanPassword [![Build Status](https://travis-ci.org/fabioricali/HumanPassword.svg?branch=master)](https://travis-ci.org/fabioricali/HumanPassword) [![Coverage Status](https://coveralls.io/repos/github/fabioricali/HumanPassword/badge.svg)](https://coveralls.io/github/fabioricali/HumanPassword)
Simple library to generate a password (string + number) easy to remember.

# Installation

```javascript
npm install human-password --save
```

# Example
### Basic
```javascript
var humanPassword = require('human-password');

humanPassword();
// => 'fuxeru9070'
```

### With options

Name | Default | Description
-|-|-
couples | 3 | `integer`, a couple of consonant + vowel
digits | 4 | `integer`, a number of digits, if is 0 number will be hidden
randomUpper | false | `boolean`, random letters uppercase
numberPosition | end | `string`, number position in string, can be "start" or "end"

```javascript
var humanPassword = require('human-password');

humanPassword({
    couples: 5,
    digits: 4,
    randomUpper: true
});
// => 'PutIGoKobi7136'

// Hide number
humanPassword({
    couples: 5,
    digits: 0
});
// => 'gicominobi'

// Number in start position
humanPassword({
    couples: 5,
    digits: 4,
    numberPosition: 'start'
});
// => '6539vikohylure'
```