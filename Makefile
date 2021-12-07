bundle.js: iife-prefix.js handler.js iife-suffix.js
	cat $^ >$@
