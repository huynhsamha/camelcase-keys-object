const camelKeys = require('./../index');

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
