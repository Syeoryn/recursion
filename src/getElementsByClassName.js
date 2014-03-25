// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var that = arguments[1]? arguments[1] : document;
  var elements = [];
	if(that.childNodes.length > 0){
		for(var i = 0; i < that.childNodes.length; i++){
			var classes = that.childNodes[i].classList;
			/* Iterate over classes to find if it has className,
					then elements.push(thing).
			*/
			for(key in classes){
				if(classes[key] == className) {
					elements.push(that.childNodes[i]);
					break;
				}
			}
			var nestedElements = getElementsByClassName(className,that.childNodes[i]);
			for(var j = 0; j < nestedElements.length; j++) if(nestedElements[j]) elements.push(nestedElements[j]);
		}
	}
	return elements
};