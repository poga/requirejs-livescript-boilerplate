#RequireJS + LiveScript Boilerplate

##Usage

	git clone git://github.com/poga/requirejs-livescript-boilerplate.git
	
write a module with livescript?
	
	define [], ->
 	  console.log "It Works!"
 	  body = document.getElementsByTagName("body")[0]
 	  body.innerHTML = "<h1>It Works!</h1>"
 	  
include a module written in livescript?

	require(["ls!lstest"], function () {
		//....
	});
	
##Build

First, install node.js. Then go to the root directory of this boilerplate,

	node bin/r.js -o scripts/build.js

Built project will be placed at build/

	