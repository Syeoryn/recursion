// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var type =typeof obj;
	if( type == 'object' )	type = Array.isArray(obj) ? 'array' : 'object';
	var spacer = arguments[1]? "\n" + arguments[1] : "";
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
			var string = "["
			for(var i = 0; i < obj.length; i++){
				string += spacer + stringifyJSON(obj[i]);
				if(i < obj.length-1) string += ",";
			}
			string += spacer.length > 0? "\n]" : "]";
			return string;
			break;
		case type = 'object':
			
			break;
	}
};
