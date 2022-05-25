
Features: </br>

* Ability to kill & start python web server automatically at the start of suite runs with any mentioned port(default - 3000).
* Override’s base url port of all tests with the mentioned port.
* Kills the web server at the end of suite runs.
* Ability to exit the execution in case of python web server errors.</br>

Prerequisites: </br>
* Testim supports all LTS versions of Node.js. (12.13+ ,14.15+ and 16.13+) </br>
* Install testim:  ```npm install -g @testim/testim-cli```

Steps to setup: </br>

1. Update project & token within config.js.</br>

2. Execute the following in terminal to run locally: </br>
```export PORT=3000 && testim -c 'config.js' --use-local-chrome-driver```

3. Execute the following in terminal to run on Testim Grid: </br>
```export PORT=3000 && testim -c 'config.js'  --tunnel --tunnel-port ${PORT}```


Note:</br>
* Change way of exporting & accessing variables if running in windows.