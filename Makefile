bundle.js: iife-prefix.js paho-mqtt.min.js handler.js iife-suffix.js
	cat $^ >$@

paho-mqtt.min.js:
	wget https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.1.0/paho-mqtt.min.js
