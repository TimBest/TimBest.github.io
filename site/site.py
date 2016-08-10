import os

from staticjinja import make_site

import config


if __name__ == "__main__":
    # ensure output directory exists
    if not os.path.exists(config.OUTPUT_DIRECTORY):
        os.makedirs(config.OUTPUT_DIRECTORY)

    site = make_site(
        outpath=config.OUTPUT_DIRECTORY
    )

    site.render()
