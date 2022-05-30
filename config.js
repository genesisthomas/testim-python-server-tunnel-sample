"use strict";
const { spawn } = require('node:child_process');
let os = require("os")

exports.config = {
    // Set project id. More info: https://help.testim.io/docs/the-command-line-cli 
    project: "---",
    // Set authentication token
    token: "---",
    grid: "testim-ha-grid",
    // Override the base URL defined in the test in order to run it again on a different envinronment.
    baseUrl: `http://localhost:${process.env.PORT || 3000}`,
    // Hook that gets executed before the suite starts
    beforeSuite: function(suite) {
        exports.workspace = process.env.workspace || process.cwd();
        // kills any running python process, starts python server
        startPythonServer("./server.py", process.env.PORT || 3000);
    },
    // Hook that gets executed after the suite has ended
    afterSuite: function(suite) {
        // kills any running python process
        killChildProcess("pkill Python");
    }
};

/**
 * Kills child process
 * @param {*} cmd - command to be executed
 */
function killChildProcess(cmd) {
    require("child_process").exec(cmd);
}

/**
 *  Start python server
 * @param {*} path - Path of python file
 * @param {*} port - port to start the python server
 */
function startPythonServer(path, port) {
    // Kill any existing python processes
    killChildProcess("pkill Python");
    // Start the python server using provided port
    let shell = spawn("python3", [path, port], { encoding: 'utf8' });
    shell.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    // Stops execution in case of error
    shell.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        process.exit(1);
    });

    shell.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}