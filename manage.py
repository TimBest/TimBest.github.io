import os
import posixpath
import sys
import time
import urllib.parse

import config
import yaml
from http.server import HTTPServer, SimpleHTTPRequestHandler
from staticjinja import make_site


class Build():

    def get_contexts(self):
        projects_data = os.path.join(config.SITE_DIRECTORY, '_data/_projects.yml')
        projects_context = {
            'projects': yaml.load(open(projects_data)),
        }
        return [('projects/index.html', projects_context)]

    def run(self):
        # ensure output directory exists
        if not os.path.exists(config.OUTPUT_DIRECTORY):
            os.makedirs(config.OUTPUT_DIRECTORY)

        site = make_site(
            searchpath=config.SITE_DIRECTORY,
            outpath=config.OUTPUT_DIRECTORY,
            staticpaths=['static/',],
            contexts=self.get_contexts(),
        )

        site.render()




class StaticHTTPRequestHandler(SimpleHTTPRequestHandler):

    def translate_path(self, path):
        """Translate a /-separated PATH to the local filename syntax.

        Components that mean special things to the local file system
        (e.g. drive or directory names) are ignored.  (XXX They should
        probably be diagnosed.)

        """
        # abandon query parameters
        path = path.split('?',1)[0]
        path = path.split('#',1)[0]
        # Don't forget explicit trailing slash when normalizing. Issue17324
        trailing_slash = path.rstrip().endswith('/')
        try:
            path = urllib.parse.unquote(path, errors='surrogatepass')
        except UnicodeDecodeError:
            path = urllib.parse.unquote(path)
        path = posixpath.normpath(path)
        words = path.split('/')
        words = filter(None, words)
        path = config.OUTPUT_DIRECTORY
        for word in words:
            if os.path.dirname(word) or word in (os.curdir, os.pardir):
                # Ignore components that are not a simple file/directory name
                continue
            path = os.path.join(path, word)
        if trailing_slash:
            path += '/'
        return path


class Serve():

    def run(self, host='', port=8000):
        httpd = HTTPServer((host, port), StaticHTTPRequestHandler)
        print(time.asctime(), "Server Starts - %s:%s" % (host, port))
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
        httpd.server_close()
        print(time.asctime(), "Server Stops - %s:%s" % (host, port))
        httpd.serve_forever()

COMMANDS = {
    "build": Build(),
    "serve": Serve(),
}

if __name__ == "__main__":
    command = COMMANDS.get(sys.argv[1])

    if not command:
        print("command not found options are: %s" % list(COMMANDS.keys()))
    else:
        command.run()
