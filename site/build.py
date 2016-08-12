import os

from staticjinja import make_site


if __name__ == "__main__":
    root_directory = os.path.dirname(os.path.realpath(__file__))
    output_directory = os.path.join(root_directory, '../_site/')

    # ensure output directory exists
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    site = make_site(
        searchpath=root_directory,
        outpath=output_directory,
        staticpaths=[
            'images/',
            'scripts/',
            'stylesheets/',
        ],
    )

    site.render()
