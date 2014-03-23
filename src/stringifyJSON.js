// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var type =typeof obj;
	if( type == 'object' )	type = Array.isArray(obj) ? 'array' : 'object';
	switch(true){
		case type == 'string':
			return "" + "\"" + obj + "\"";
			break;
		case type == 'number':
			return "" + obj;
			break;
		case type == 'boolean':
			return "" + obj;
			break;
		case type == 'function':
			return undefined
			break;
		case type == 'array':
			break;
		case type = 'object':
			break;
	}
};
