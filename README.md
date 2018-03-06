# camelcase-keys-object

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

Camelcase the keys of an object. Use for node.js and browser

It is useful for [oracledb](https://github.com/oracle/node-oracledb).


## Installation

`$ npm install --save camelcase-keys-object`

or

`$ yarn add camelcase-keys-object`


## Usage

#### Node.JS

```js
const camelKeys = require('camelcase-keys-object');

const employee = {
	ID: 127,
	FIRST_Name: 'Huynh',
	last_NAME: 'Ha',
	salary: 1500
};

const res = camelKeys(employee);

console.log(res);

// { id: 127, firstName: 'Huynh', lastName: 'Ha', salary: 1500 }

console.log(camelKeys(null)); // null
console.log(camelKeys(undefined)); // null
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/camelcase-keys-object/dist/camelcase-keys-object.js"></script>
<!-- Or use minified-->
<script src="./node_modules/camelcase-keys-object/dist/camelcase-keys-object.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/camelcase-keys-object"></script>
```
##### Usage
```html
<script>
	const employee = {
		ID: 127,
		FIRST_Name: 'Huynh',
		last_NAME: 'Ha',
		salary: 1500
	};

	const res = camelKeys(employee);

	console.log(res);
	console.log(camelKeys(null)); // null
	console.log(camelKeys(undefined)); // null
</script>
```

## API

### camelKeys(object)

Returns a new object which keys is/are camelcased.


## Related
+ [js-camelcase](https://github.com/huynhsamha/js-camelcase)
+ [uppercase-keys-object](https://github.com/huynhsamha/uppercase-keys-object)
+ [lowercase-keys-object](https://github.com/huynhsamha/lowercase-keys-object)


[npm-image]: https://img.shields.io/npm/v/camelcase-keys-object.svg?style=flat
[npm-url]: https://www.npmjs.com/package/camelcase-keys-object
[downloads-image]: https://img.shields.io/npm/dm/camelcase-keys-object.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/camelcase-keys-object
