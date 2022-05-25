# Python http server example
from http.server import BaseHTTPRequestHandler, HTTPServer
import sys

# Sample website
class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(
            bytes("<html><head><title>Testim python sample</title></head>", "utf-8"))
        self.wfile.write(bytes(
            "<body style='background-image: linear-gradient(to right, #DECBA4, #3E5151);'>", "utf-8"))
        self.wfile.write(
            bytes("<h4>Welcome to Testim python web server example.</h4>", "utf-8"))
        self.wfile.write(bytes("<h5>Requested path: %s</h5>" %
                         self.path, "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))


if __name__ == "__main__":
    # fetches port number from arguments or 3000 if no arguments
    print("Number of arguments:", len(sys.argv), "arguments.")
    serverPort = int(str(sys.argv[1])) if len(sys.argv) > 1 else 3000
    print("Server port:", serverPort)
    server = HTTPServer(("", serverPort), MyServer)
    print("Starting server, use <Ctrl-C> to stop")
    #starts the server forever
    server.serve_forever()
    hostName = "localhost"
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    # webServer.server_close()
