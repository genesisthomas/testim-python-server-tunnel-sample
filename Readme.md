
<h2> Testim Python web server tunnel sample</h2> </br>

[![Testim E2E](https://github.com/genesisthomas/testim-python-server-tunnel-sample/actions/workflows/github.yaml/badge.svg)](https://github.com/genesisthomas/testim-python-server-tunnel-sample/actions/workflows/github.yaml)

Features: </br>

* Ability to kill & start python web server automatically at the start of suite runs using any mentioned port (default - 3000).
* Override’s base url port of all tests using the mentioned port.
* Kills the web server at the end of suite runs.
* Ability to exit the execution in case of python web server errors.</br>

Prerequisites: </br>
* Testim supports all LTS versions of Node.js. (14.15+ and 16.13+) </br>
* Install testim:  ```npm install -g @testim/testim-cli```

Steps to setup: </br>

1. Update project & token within config.js.</br>

2. Execute the following in terminal to run locally: </br>
```export PORT=3000 && testim -c 'config.js' --use-local-chrome-driver```

3. Execute the following in terminal to run on Testim Grid: </br>
```export PORT=3000 && testim -c 'config.js'  --tunnel --tunnel-port ${PORT}```


Note:</br>
* Change way of exporting & accessing variables if running in windows.
* Pass parameters for all test runs using [JSON parameters](https://help.testim.io/docs/json-parameters-file-parameters#using-the-parameters-in-the-cli).
* Change BASE URL in runtime by following this [doc](https://help.testim.io/docs/base-url).