// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var elements = [];
	if(this.childNodes.length > 0){
		for(var i = 0; i < this.childNodes.length; i++){
			var classes = this.childNodes[i].classList;
			/* Iterate over classes to find if it has className,
					then elements.push(thing).
			*/
			for(key in classes){
				if(classes[key] == className) {
					elements.push(this.childNodes[i]);
					break;
				}
			}
			var nestedElements = getElementsByClassName.apply(this.childNodes[i],[className]);
			for(var j = 0; j < nestedElements.length; j++) if(nestedElements[j]) elements.push(nestedElements[j]);
		}
	}
	return elements
};