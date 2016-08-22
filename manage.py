import os
import posixpath
import sys
import time
import urllib.parse

import yaml
from http.server import HTTPServer
from staticjinja import make_site

import config
from generator.server import StaticHTTPRequestHandler
from generator.rules import remove_templates_dir


class Build():

    def get_contexts(self):
        projects_data = os.path.join(config.SITE_DIRECTORY, '_data/_projects.yml')
        projects_context = {
            'projects': yaml.load(open(projects_data)),
        }
        return [('templates/projects/index.html', projects_context)]

    def run(self):
        # ensure output directory exists
        if not os.path.exists(config.OUTPUT_DIRECTORY):
            os.makedirs(config.OUTPUT_DIRECTORY)

        site = make_site(
            searchpath=config.SITE_DIRECTORY,
            outpath=config.OUTPUT_DIRECTORY,
            staticpaths=[config.STATIC_PATH,],
            contexts=self.get_contexts(),
            env_globals={
                'static': lambda x: '/%s%s' % (config.STATIC_PATH, x),
            },
            rules=[
                ('templates/*', remove_templates_dir),
            ],
        )

        site.render()


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
