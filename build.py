import os, yaml

from staticjinja import make_site


if __name__ == "__main__":
    root_directory = os.path.dirname(os.path.realpath(__file__))
    output_directory = os.path.join(root_directory, '_site/')
    site_directory = os.path.join(root_directory, 'site/')


    projects_data = os.path.join(site_directory, '_data/_projects.yml')
    projects_context = {
        'projects': yaml.load(open(projects_data))
    }
    print(projects_context)
    # ensure output directory exists
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    site = make_site(
        searchpath=site_directory,
        outpath=output_directory,
        staticpaths=[
            'static/',
        ],
        contexts=[('projects/index.html', projects_context)],
    )

    site.render()
