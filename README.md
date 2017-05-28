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
couples | 3 | Integer, a couple of consonant + vowel
digits | 4 | Integer, a number of digits
randomUpper | false | Boolean, random letters uppercase

```javascript
var humanPassword = require('human-password');

humanPassword({
    couples: 5,
    digits: 4,
    randomUpper: true
});
// => 'PutIGoKobi9070'
```